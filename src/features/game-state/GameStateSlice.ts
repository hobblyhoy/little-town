import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
   dictionaryToArray,
   generateInternalKey,
   keysForRelativeItem,
   updateBoardTileWithCellNeighborData,
} from '../../app/utils';
import {
   IBoardStateTile,
   IBoardStateTileSetter,
   IBoardStateTopper,
   IBoardStateTopperSetter,
   IIsometricCoordinates,
} from '../../types/BoardTypes';
import { boardSize } from '../../app/constants';

export interface IGameState {
   boardTiles: { [key: string]: IBoardStateTile };
   boardToppers: { [key: string]: IBoardStateTopper };
}

const initialState: IGameState = {
   boardTiles: {},
   boardToppers: {},
};

// TODO I want to add some references to each tiles 4 neighbors for easier road construction
export const gameStateSlice = createSlice({
   name: 'gamestate',
   initialState,
   reducers: {
      initializeBoardTiles: state => {
         const tiles: { [key: string]: IBoardStateTile } = {};

         for (let row = boardSize; row < boardSize * 2 - 1; row++) {
            for (let col = row - boardSize + 1; col < boardSize; col++) {
               const isoX = col;
               const isoY = row - col;
               const key = generateInternalKey({ isoX, isoY, isoZ: 0 });
               tiles[key] = {
                  isoX,
                  isoY,
                  isoZ: 0,
                  type: 'tile',
                  tileType: 'grass',
                  key,
                  cellUpperLeft: null,
                  cellUpperRight: null,
                  cellLowerLeft: null,
                  cellLowerRight: null,
                  cellAbove: null,
                  isInvalid: false,
               };
            }
         }
         for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col <= row; col++) {
               const isoX = col;
               const isoY = row - col;
               const key = generateInternalKey({ isoX, isoY, isoZ: 0 });
               tiles[key] = {
                  isoX,
                  isoY,
                  isoZ: 0,
                  type: 'tile',
                  tileType: 'grass',
                  key,
                  cellUpperLeft: null,
                  cellUpperRight: null,
                  cellLowerLeft: null,
                  cellLowerRight: null,
                  cellAbove: null,
                  isInvalid: false,
               };
            }
         }

         // Apply our relative references
         Object.keys(tiles)
            .map(key => tiles[key])
            .forEach(boardItem => updateBoardTileWithCellNeighborData(tiles, boardItem));

         state.boardTiles = tiles;
      },

      addTopper: (state, action: PayloadAction<IBoardStateTopperSetter>) => {
         const tileKey = generateInternalKey({isoX: action.payload.isoX, isoY: action.payload.isoY, isoZ: 0});
         if (state.boardTiles[tileKey].isInvalid) return;

         const topperKey = generateInternalKey(action.payload);
         const newTopper: IBoardStateTopper = {
            ...action.payload,
            key: topperKey,
            cellBelow: null,
            isInvalid: false,
         };

         let relativeKeys = keysForRelativeItem(newTopper);
         let baseTile = state.boardTiles[relativeKeys.below];
         newTopper.cellBelow = baseTile.key;
         baseTile.cellAbove = newTopper.key;

         state.boardToppers[topperKey] = newTopper;
      },

      updateTile: (state, action: PayloadAction<IBoardStateTileSetter>) => {
         const key = generateInternalKey({
            isoX: action.payload.isoX,
            isoY: action.payload.isoY,
            isoZ: 0,
         });
         if (state.boardTiles[key].isInvalid) return;

         state.boardTiles[key] = { ...state.boardTiles[key], tileType: action.payload.tileType };
      },

      dimTiles: (state, action: PayloadAction<IIsometricCoordinates[]>) => {
         // regardless of if a tile or a topper is passed in we always dim both

         action.payload.forEach(isoCoords => {
            var tileKey = generateInternalKey({
               isoX: isoCoords.isoX,
               isoY: isoCoords.isoY,
               isoZ: 0
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

      resetDimTiles: (state) => {
         dictionaryToArray(state.boardTiles).forEach(x => x.isInvalid = false);
         dictionaryToArray(state.boardToppers).forEach(x => x.isInvalid = false);
      }
   },
});

// reducer export
export const { initializeBoardTiles, addTopper, updateTile, dimTiles, resetDimTiles } = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;

export default gameStateSlice.reducer;
