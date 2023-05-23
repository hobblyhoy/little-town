import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
   buildGrassTile,
   dictionaryToArray,
   generateInternalKey,
   isBig,
   isHarvestable,
   isHouse,
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
import {
   boardItemCost,
   boardProfit,
   boardSize,
   boardUpgradeCost,
   colors,
   treeVariations,
} from '../../app/constants';
import { sample } from 'lodash';

export interface IGameState {
   boardTiles: { [key: string]: IBoardStateTile };
   boardToppers: { [key: string]: IBoardStateTopper };
   recentlyUpdatedToppers: IBoardStateTopper[];
   recentlyDeletedTopper: IBoardStateTopper | null;
   recentlyUpdatedTile: IBoardStateTile | null;
   recentlyResetTile: IBoardStateTile | null;
   money: number;
   musicOn: boolean;
   soundEffectsOn: boolean;
}

const initialState: IGameState = {
   boardTiles: {},
   boardToppers: {},
   recentlyUpdatedToppers: [],
   recentlyDeletedTopper: null,
   recentlyUpdatedTile: null,
   recentlyResetTile: null,
   money: 200,
   musicOn: true,
   soundEffectsOn: true,
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
         if (state.money < boardItemCost[action.payload.topperType]) return;

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

         // Special case - For Houses and windmills
         // apply logic to face them towards the road, biased towers bottom right, bottom left
         // and apply colors
         if (newTopper.topperType === 'house' || newTopper.topperType === 'windmill') {
            let direction: Directional = 'bottomRight';
            if (
               baseTile.cellLowerLeft &&
               state.boardTiles[baseTile.cellLowerLeft].tileType === 'road'
            ) {
               direction = 'bottomLeft';
            } else if (
               baseTile.cellUpperRight &&
               state.boardTiles[baseTile.cellUpperRight].tileType === 'road'
            ) {
               direction = 'topRight';
            } else if (
               baseTile.cellUpperLeft &&
               state.boardTiles[baseTile.cellUpperLeft].tileType === 'road'
            ) {
               direction = 'topLeft';
            }
            newTopper.direction = direction;
            newTopper.color = sample(colors);
         }

         // Special case - Tree variations
         if (newTopper.topperType === 'tree') {
            newTopper.variation = sample(treeVariations);
         }

         // Place the item onto the board
         state.boardToppers[topperKey] = newTopper;

         // Gimme that money
         if (!action.payload.isInitial) {
            state.money -= boardItemCost[action.payload.topperType];
         }

         // Update recently added
         state.recentlyUpdatedToppers = [newTopper];
      },

      increaseTopperSize: (state, action: PayloadAction<string>) => {
         const topper = state.boardToppers[action.payload];
         if (!topper || topper.size === 'big') return;
         if (topper.topperType === 'house' && state.money < boardUpgradeCost[topper.topperType]) {
            return;
         }

         topper.size = topper.size === 'tiny' ? 'small' : 'big';
         state.boardToppers[topper.key] = topper;

         // Gimme that money
         if (topper.topperType === 'house') {
            state.money -= boardUpgradeCost[topper.topperType];
         }

         // Update recently added
         state.recentlyUpdatedToppers = [topper];
      },

      rotateTopper: (state, action: PayloadAction<IIsometricCoordinates>) => {
         const topperKey = generateInternalKey(action.payload);
         const topper = state.boardToppers[topperKey];
         if (!topper || topper.isInvalid || !topper.direction) return;

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

         // Update recently updated
         state.recentlyUpdatedTile = state.boardTiles[key];
      },

      setValidBoardItems: (
         state,
         action: PayloadAction<{ validTiles: IBoardStateTile[]; validToppers: IBoardStateTopper[] }>
      ) => {
         // Start be disabling all board items
         dictionaryToArray(state.boardTiles).forEach(x => (x.isInvalid = true));
         dictionaryToArray(state.boardToppers).forEach(x => (x.isInvalid = true));

         // selectively reenable valid board items where both tile and topper (if it exists) are valid
         action.payload.validTiles.forEach(tile => {
            if (!tile.cellAbove) {
               state.boardTiles[tile.key].isInvalid = false;
            } else {
               let topper = state.boardToppers[tile.cellAbove];
               if (action.payload.validToppers.some(x => x.key === topper.key)) {
                  state.boardTiles[tile.key].isInvalid = false;
                  state.boardToppers[topper.key].isInvalid = false;
               }
            }
         });
      },

      resetValidBoardItems: state => {
         dictionaryToArray(state.boardTiles).forEach(x => (x.isInvalid = false));
         dictionaryToArray(state.boardToppers).forEach(x => (x.isInvalid = false));
      },

      resetTile: (state, action: PayloadAction<IIsometricCoordinates>) => {
         var tileKey = generateInternalKey({ ...action.payload, isoZ: 0 });
         var topperKey = generateInternalKey({ ...action.payload, isoZ: 1 });
         if (state.boardToppers[topperKey]?.isInvalid) return;

         // Delete any toppers and reset the tile to grass
         if (state.boardToppers[topperKey]) {
            state.recentlyDeletedTopper = state.boardToppers[topperKey];
            delete state.boardToppers[topperKey];
            state.boardTiles[tileKey].cellAbove = null;
         }
         if (state.boardTiles[tileKey].tileType !== 'grass') {
            state.boardTiles[tileKey].tileType = 'grass';
            state.recentlyResetTile = state.boardTiles[tileKey];
         }
      },

      toggleMusic: state => {
         state.musicOn = !state.musicOn;
      },
      toggleSoundEffects: state => {
         state.soundEffectsOn = !state.soundEffectsOn;
      },

      harvestToppers: state => {
         const toppers = dictionaryToArray(state.boardToppers).filter(isHarvestable).filter(isBig);

         if (toppers.length === 0) return;

         toppers.forEach(topper => {
            if (topper.topperType === 'tree') {
               state.money += boardProfit[topper.topperType];
               topper.size = 'tiny';
            } else {
               state.money += boardProfit[topper.topperType];
               topper.size = 'small';
            }
         });

         // Push a topper updated to trigger sound effects
         state.recentlyUpdatedToppers = toppers;
      },

      generateHouseIncome: state => {
         const houses = dictionaryToArray(state.boardToppers).filter(isHouse);
         houses.forEach(house => {
            let creditAmount = boardProfit[house.topperType];
            if (house.size === 'big') {
               creditAmount *= 2;
            }
            state.money += creditAmount;
         });
      },
   },
});

// reducer export
export const {
   initializeBoardTiles,
   addTopper,
   increaseTopperSize,
   rotateTopper,
   updateTile,
   setValidBoardItems,
   resetValidBoardItems,
   resetTile,
   toggleMusic,
   toggleSoundEffects,
   harvestToppers,
   generateHouseIncome,
} = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;
export const selectMoney = (state: RootState) => state.gamestate.money;
export const selectRecentlyUpdatedToppers = (state: RootState) =>
   state.gamestate.recentlyUpdatedToppers;
export const selectRecentlyDeletedTopper = (state: RootState) =>
   state.gamestate.recentlyDeletedTopper;
export const selectRecentlyUpdatedTile = (state: RootState) => state.gamestate.recentlyUpdatedTile;
export const selectRecentlyResetTile = (state: RootState) => state.gamestate.recentlyResetTile;
export const selectMusicOn = (state: RootState) => state.gamestate.musicOn;
export const selectSoundEffectsOn = (state: RootState) => state.gamestate.soundEffectsOn;

export default gameStateSlice.reducer;
