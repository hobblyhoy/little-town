// mouseDownOn (iso)

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBoardStateTile, ICartesianCoordinates } from '../../types/BoardTypes';
import { RootState } from '../../app/store';

export interface IClickAndDragState {
   mouseDownOn: IBoardStateTile | null;
   mouseMoveOn: IBoardStateTile | null;
   userHasInteractedWithDocument: boolean;
   touchStart: ICartesianCoordinates | null;
   touchMove: ICartesianCoordinates | null;
   touchEnd: boolean;
}

const initialState: IClickAndDragState = {
   mouseDownOn: null,
   mouseMoveOn: null,
   userHasInteractedWithDocument: false,
   touchStart: null,
   touchMove: null,
   touchEnd: false
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
         state.mouseMoveOn = action.payload;
      },
      setTouchStart: (state, action: PayloadAction<ICartesianCoordinates>) => {
         state.touchEnd = false;
         state.touchStart = action.payload;
      },
      setTouchMove: (state, action: PayloadAction<ICartesianCoordinates>) => {
         if (state.touchMove?.cartX !== action.payload.cartX || state.touchMove?.cartY !== action.payload.cartY){
            state.touchMove = action.payload;

         }
      },
      signalTouchEnd: (state) => {
         state.touchStart = null;
         state.touchMove = null;
         state.touchEnd = true;
      }
   },
});

// reducer export
export const { setMouseDownOn, setMouseMoveOn, setTouchStart, setTouchMove, signalTouchEnd } = clickAndDragSlice.actions;

// selector export
export const selectMouseDownOn = (state: RootState) => state.clickanddrag.mouseDownOn;
export const selectMouseMoveOn = (state: RootState) => state.clickanddrag.mouseMoveOn;
export const selectUserHasInteractedWithDocument = (state: RootState) => state.clickanddrag.userHasInteractedWithDocument;
export const selectTouchStart = (state: RootState) => state.clickanddrag.touchStart;
export const selectTouchMove = (state: RootState) => state.clickanddrag.touchMove;
export const selectTouchEnd = (state: RootState) => state.clickanddrag.touchEnd;

export default clickAndDragSlice.reducer;
