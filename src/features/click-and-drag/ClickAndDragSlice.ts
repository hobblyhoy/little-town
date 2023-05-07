// mouseDownOn (iso)

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBoardStateTile } from '../../types/BoardTypes';
import { RootState } from '../../app/store';

export interface IClickAndDragState {
   mouseDownOn: IBoardStateTile | null;
}

const initialState: IClickAndDragState = {
   mouseDownOn: null,
};

export const clickAndDragSlice = createSlice({
   name: 'clickanddrag',
   initialState,
   reducers: {
      setMouseDownOn: (state, action: PayloadAction<IBoardStateTile>) => {
         state.mouseDownOn = action.payload;
      },
   },
});

// reducer export
export const { setMouseDownOn } = clickAndDragSlice.actions;

// selector export
export const selectMouseDownOn = (state: RootState) => state.clickanddrag.mouseDownOn;

export default clickAndDragSlice.reducer;
