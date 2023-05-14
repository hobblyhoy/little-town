import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartesianDirectional, ICartesianOffset } from '../../types/BoardTypes';

export interface IZoomScrollState {
   zoom: number;
   scrollOffsetX: number;
   scrollOffsetY: number;
}

const initialState: IZoomScrollState = {
   zoom: 1,
   scrollOffsetX: 0,
   scrollOffsetY: 0,
};

export const zoomScrollSlice = createSlice({
   name: 'zoomscroll',
   initialState,
   reducers: {
      zoomIn: state => {
         if (state.zoom < 3.4) {
            state.zoom += 0.1;
         }
      },
      zoomOut: state => {
         if (state.zoom > 0.5) {
            state.zoom -= 0.1;
         }
      },
      scroll: (state, action: PayloadAction<CartesianDirectional>) => {
         switch (action.payload) {
            case 'top':
               state.scrollOffsetY = Math.round(state.scrollOffsetY + 5 * state.zoom);
               break;
            case 'left':
               state.scrollOffsetX = Math.round(state.scrollOffsetX + 5 * state.zoom);
               break;
            case 'right':
               state.scrollOffsetX = Math.round(state.scrollOffsetX - 5 * state.zoom);
               break;
            case 'bottom':
               state.scrollOffsetY = Math.round(state.scrollOffsetY - 5 * state.zoom);
               break;
         }
      },
   },
});

// reducer export
export const { zoomIn, zoomOut, scroll } = zoomScrollSlice.actions;

// selector export
export const selectZoom = (state: RootState) => state.zoomscroll.zoom;
export const selectScrollOffset = (state: RootState): ICartesianOffset => {
   return { offsetX: state.zoomscroll.scrollOffsetX, offsetY: state.zoomscroll.scrollOffsetY };
};

export default zoomScrollSlice.reducer;
