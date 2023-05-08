import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { generateInternalKey, keysForRelativeItem } from '../../app/utils';
import {
   IBoardStateTile,
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
            .forEach(boardItem => {
               // The original plan here was for these to be references to the board items instead of just the
               // keys but thats making redux throw a fit. In theory that should work though, maybe revisit.
               let relativeKeys = keysForRelativeItem(boardItem);
               boardItem.cellUpperLeft = tiles[relativeKeys.upperLeft]
                  ? tiles[relativeKeys.upperLeft].key
                  : null;
               boardItem.cellUpperRight = tiles[relativeKeys.upperRight]
                  ? tiles[relativeKeys.upperRight].key
                  : null;
               boardItem.cellLowerLeft = tiles[relativeKeys.lowerLeft]
                  ? tiles[relativeKeys.lowerLeft].key
                  : null;
               boardItem.cellLowerRight = tiles[relativeKeys.lowerRight]
                  ? tiles[relativeKeys.lowerRight].key
                  : null;
            });

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
   },
});

// reducer export
export const { initializeBoardTiles, addTopper } = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;

export default gameStateSlice.reducer;
