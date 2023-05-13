import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
   buildGrassTile,
   dictionaryToArray,
   generateInternalKey,
   keysForRelativeItem,
   updateBoardTileWithCellNeighborData,
} from '../../app/utils';
import {
   Directional,
   IBoardStateTile,
   IBoardStateTileSetter,
   IBoardStateTopper,
   IBoardStateTopperSetter,
   IIsometricCoordinates,
} from '../../types/BoardTypes';
import { boardItemCost, boardSize } from '../../app/constants';

export interface IGameState {
   boardTiles: { [key: string]: IBoardStateTile };
   boardToppers: { [key: string]: IBoardStateTopper };
   money: number;
   lumber: number;
   wheat: number;
}

const initialState: IGameState = {
   boardTiles: {},
   boardToppers: {},
   money: 200,
   lumber: 0,
   wheat: 0,
};

export const gameStateSlice = createSlice({
   name: 'gamestate',
   initialState,
   reducers: {
      initializeBoardTiles: state => {
         const tiles: { [key: string]: IBoardStateTile } = {};

         for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col <= row; col++) {
               const isoX = col;
               const isoY = row - col;
               const key = generateInternalKey({ isoX, isoY, isoZ: 0 });
               tiles[key] = buildGrassTile({ isoX, isoY }, key);
            }
         }
         for (let row = boardSize; row < boardSize * 2 - 1; row++) {
            for (let col = row - boardSize + 1; col < boardSize; col++) {
               const isoX = col;
               const isoY = row - col;
               const key = generateInternalKey({ isoX, isoY, isoZ: 0 });
               tiles[key] = buildGrassTile({ isoX, isoY }, key);
            }
         }

         // Apply our relative references
         Object.keys(tiles)
            .map(key => tiles[key])
            .forEach(boardItem => updateBoardTileWithCellNeighborData(tiles, boardItem));

         state.boardTiles = tiles;
      },

      // TODO
      // We cant dispatch sounds or influence other states directly from the reducer which
      // creates problems for the likes of our "grow" function and if we want to play sound effects
      // Will return to this...
      addTopper: (state, action: PayloadAction<IBoardStateTopperSetter>) => {
         // Early returns for cases where it's an invalid placement
         const tileKey = generateInternalKey({
            isoX: action.payload.isoX,
            isoY: action.payload.isoY,
            isoZ: 0,
         });
         if (state.boardTiles[tileKey].isInvalid) return;
         const topperKey = generateInternalKey({ ...action.payload, isoZ: 1 });
         if (state.boardToppers[topperKey]?.topperType === action.payload.topperType) return;
         if (boardItemCost[action.payload.topperType] > state.money) return;

         // Construct the topper object
         const newTopper: IBoardStateTopper = {
            ...action.payload,
            key: topperKey,
            cellBelow: null,
            isInvalid: false,
            type: 'topper',
            isoZ: 1,
         };

         // Build relative references
         let relativeKeys = keysForRelativeItem(newTopper);
         let baseTile = state.boardTiles[relativeKeys.below];
         newTopper.cellBelow = baseTile.key;
         baseTile.cellAbove = newTopper.key;

         // Place the item onto the board
         state.boardToppers[topperKey] = newTopper;

         // Gimme that money
         state.money -= boardItemCost[action.payload.topperType];
      },

      growTopper: (state, action: PayloadAction<string>) => {
         const topper = state.boardToppers[action.payload];
         topper.size = topper.size === 'init' ? 'small' : 'big';
         state.boardToppers[topper.key] = topper;
      },

      rotateTopper: (state, action: PayloadAction<IIsometricCoordinates>) => {
         const topperKey = generateInternalKey(action.payload);
         const topper = state.boardToppers[topperKey];
         if (!topper || !topper.direction) return;

         const directions: Directional[] = ['bottomLeft', 'topLeft', 'topRight', 'bottomRight'];
         const currentIndex = directions.indexOf(topper.direction);
         const newIndex = (currentIndex + 1) % directions.length;
         const newDirection = directions[newIndex];

         state.boardToppers[topper.key].direction = newDirection;
      },

      updateTile: (state, action: PayloadAction<IBoardStateTileSetter>) => {
         // Early returns for cases where it's an invalid placement
         const key = generateInternalKey({
            isoX: action.payload.isoX,
            isoY: action.payload.isoY,
            isoZ: 0,
         });
         if (state.boardTiles[key].isInvalid) return;
         if (state.boardTiles[key].tileType === action.payload.tileType) return;
         if (boardItemCost[action.payload.tileType] > state.money) return;

         // update the tile
         state.boardTiles[key] = {
            ...state.boardTiles[key],
            tileType: action.payload.tileType,
         };

         // Gimme that money
         state.money -= boardItemCost[action.payload.tileType];
      },

      dimTiles: (state, action: PayloadAction<IIsometricCoordinates[]>) => {
         // set both the tile and any toppers to dim
         action.payload.forEach(isoCoords => {
            var tileKey = generateInternalKey({
               isoX: isoCoords.isoX,
               isoY: isoCoords.isoY,
               isoZ: 0,
            });
            var topperKey = generateInternalKey({
               isoX: isoCoords.isoX,
               isoY: isoCoords.isoY,
               isoZ: 1,
            });

            state.boardTiles[tileKey].isInvalid = true;
            if (state.boardToppers[topperKey]) state.boardToppers[topperKey].isInvalid = true;
         });
      },

      resetDimTiles: state => {
         dictionaryToArray(state.boardTiles).forEach(x => (x.isInvalid = false));
         dictionaryToArray(state.boardToppers).forEach(x => (x.isInvalid = false));
      },

      resetTile: (state, action: PayloadAction<IIsometricCoordinates>) => {
         // Delete any toppers and reset the tile to grass
         var tileKey = generateInternalKey({ ...action.payload, isoZ: 0 });
         var topperKey = generateInternalKey({ ...action.payload, isoZ: 1 });
         delete state.boardToppers[topperKey];
         state.boardTiles[tileKey].tileType = 'grass';
      },
   },
});

// reducer export
export const {
   initializeBoardTiles,
   addTopper,
   growTopper,
   rotateTopper,
   updateTile,
   dimTiles,
   resetDimTiles,
   resetTile,
} = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;
export const selectInventory = (state: RootState) => {
   return {
      money: state.gamestate.money,
      lumber: state.gamestate.lumber,
      wheat: state.gamestate.wheat,
   };
};

export default gameStateSlice.reducer;
