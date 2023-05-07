import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// TODO should proabbly move these out to their own types files
export interface IBoardStateBase {
   isoX: number;
   isoY: number;
   isoZ: number; // actually keep this for purposes of the react Keys
   type: 'tile' | 'topper';
}

export interface IBoardStateTile extends IBoardStateBase {
   tileType: 'grass' | 'dirt';
}

export interface IBoardStateTopper extends IBoardStateBase {
   topperType: 'tree' | 'rock';
   topperSize: 'big' | 'small';
}

export interface IGameState {
   boardTiles: IBoardStateTile[]; //TODO these are probably better as dictionaries
   boardToppers: IBoardStateTopper[];
}

const initialState: IGameState = {
   boardTiles: [],
   boardToppers: [],
};

export const gameStateSlice = createSlice({
   name: 'gamestate',
   initialState,
   reducers: {
      initializeBoardTiles: state => {
         const size = 3;

         const tiles: IBoardStateTile[] = [];
         for (let row = 0; row < size; row++) {
            for (let col = 0; col <= row; col++) {
               const isoX = col;
               const isoY = row - col;
               tiles.push({ isoX, isoY, isoZ: 0, type: 'tile', tileType: 'grass' });
            }
         }

         for (let row = size; row < size * 2 - 1; row++) {
            for (let col = row - size + 1; col < size; col++) {
               const isoX = col;
               const isoY = row - col;
               tiles.push({ isoX, isoY, isoZ: 0, type: 'tile', tileType: 'grass' });
            }
         }

         state.boardTiles = tiles;
         console.log({ tiles });
      },

      addTopper: (state, action: PayloadAction<IBoardStateTopper>) => {
         //TODO handle logic for checks of existing stuff here or elsewhere?
         state.boardToppers.push(action.payload);
         console.log(action.payload);
      }
   },
});

// reducer export
export const { initializeBoardTiles, addTopper } = gameStateSlice.actions;

// selector export
export const selectBoardTiles = (state: RootState) => state.gamestate.boardTiles;
export const selectBoardToppers = (state: RootState) => state.gamestate.boardToppers;

export default gameStateSlice.reducer;
