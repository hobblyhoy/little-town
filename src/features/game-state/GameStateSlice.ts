import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
   generateInternalKey,
   keysForRelativeItem,
   updateBoardTileWithCellNeighborData,
} from '../../app/utils';
import {
   IBoardStateTile,
   IBoardStateTileSetter,
   IBoardStateTopper,
   IBoardStateTopperSetter,
} from '../../types/BoardTypes';

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
         const size = 3;

         const tiles: { [key: string]: IBoardStateTile } = {};

         for (let row = size; row < size * 2 - 1; row++) {
            for (let col = row - size + 1; col < size; col++) {
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
               };
            }
         }
         for (let row = 0; row < size; row++) {
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
         const key = generateInternalKey(action.payload);
         const newTopper: IBoardStateTopper = {
            ...action.payload,
            key,
            cellBelow: null,
         };

         let relativeKeys = keysForRelativeItem(newTopper);
         let baseTile = state.boardTiles[relativeKeys.below];
         newTopper.cellBelow = baseTile.key;
         baseTile.cellAbove = newTopper.key;

         state.boardToppers[key] = newTopper;
      },

      updateTile: (state, action: PayloadAction<IBoardStateTileSetter>) => {
         const key = generateInternalKey({
            isoX: action.payload.isoX,
            isoY: action.payload.isoY,
            isoZ: 0,
         });
         state.boardTiles[key] = { ...state.boardTiles[key], tileType: action.payload.tileType };
      },
   },
});

// reducer export
export const { initializeBoardTiles, addTopper, updateTile } = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;

export default gameStateSlice.reducer;
