// mouseDownOn (iso)

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBoardStateTile } from '../../types/BoardTypes';
import { RootState } from '../../app/store';

export interface IClickAndDragState {
   mouseDownOn: IBoardStateTile | null;
   mouseMoveOn: IBoardStateTile | null;
   userHasInteractedWithDocument: boolean;
}

const initialState: IClickAndDragState = {
   mouseDownOn: null,
   mouseMoveOn: null,
   userHasInteractedWithDocument: false,
};

export const clickAndDragSlice = createSlice({
   name: 'clickanddrag',
   initialState,
   reducers: {
      setMouseDownOn: (state, action: PayloadAction<IBoardStateTile | null>) => {
         state.mouseDownOn = action.payload;
         state.userHasInteractedWithDocument = true;
      },
      setMouseMoveOn: (state, action: PayloadAction<IBoardStateTile>) => {
         console.log('mousemoveon', action.payload.key);
         state.mouseMoveOn = action.payload;
      },
   },
});

// reducer export
export const { setMouseDownOn, setMouseMoveOn } = clickAndDragSlice.actions;

// selector export
export const selectMouseDownOn = (state: RootState) => state.clickanddrag.mouseDownOn;
export const selectMouseMoveOn = (state: RootState) => state.clickanddrag.mouseMoveOn;
export const selectUserHasInteractedWithDocument = (state: RootState) => state.clickanddrag.userHasInteractedWithDocument;

export default clickAndDragSlice.reducer;
