import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartesianDirectional, ICartesianOffset } from '../../types/BoardTypes';

export interface IZoomScrollState {
   zoom: number;
   scrollOffsetX: number;
   scrollOffsetY: number;
   scrollOffsetMobileX: number;
   scrollOffsetMobileY: number;
}

const initialState: IZoomScrollState = {
   zoom: 1,
   scrollOffsetX: 0,
   scrollOffsetY: 0,
   scrollOffsetMobileX: 0,
   scrollOffsetMobileY: 0,
};

export const zoomScrollSlice = createSlice({
   name: 'zoomscroll',
   initialState,
   reducers: {
      zoomIn: state => {
         console.log('in zoomIn');
         if (state.zoom < 3.4) {
            state.zoom += 0.1;
         }
      },
      zoomOut: state => {
         console.log('in zoomOut');
         if (state.zoom > 0.5) {
            state.zoom -= 0.1;
         }
      },
      scroll: (state, action: PayloadAction<CartesianDirectional>) => {
         switch (action.payload) {
            case 'top':
               state.scrollOffsetY = Math.round(state.scrollOffsetY + 10 * state.zoom);
               break;
            case 'left':
               state.scrollOffsetX = Math.round(state.scrollOffsetX + 10 * state.zoom);
               break;
            case 'right':
               state.scrollOffsetX = Math.round(state.scrollOffsetX - 10 * state.zoom);
               break;
            case 'bottom':
               state.scrollOffsetY = Math.round(state.scrollOffsetY - 10 * state.zoom);
               break;
         }
      },
      // Calculating a continuous delta is problematic so instead we keep a constantly updating value
      // for the current mobile scroll position during the whole touch event. Only once the touch
      // event is over do we update the main scrollOffset and reset the mobile one to 0.
      scrollMobile: (state, action: PayloadAction<ICartesianOffset>) => {
         console.log('in scrollMobile');
         state.scrollOffsetMobileX = action.payload.offsetX;
         state.scrollOffsetMobileY = action.payload.offsetY;
      },
      scrollMobileCommit: state => {
         console.log('in scrollMobileCommit');

         state.scrollOffsetX += state.scrollOffsetMobileX;
         state.scrollOffsetY += state.scrollOffsetMobileY;
         state.scrollOffsetMobileX = 0;
         state.scrollOffsetMobileY = 0;
      },
   },
});

// reducer export
export const { zoomIn, zoomOut, scroll, scrollMobile, scrollMobileCommit } =
   zoomScrollSlice.actions;

// selector export
export const selectZoom = (state: RootState) => state.zoomscroll.zoom;
export const selectScrollOffsetX = (state: RootState): number =>
   state.zoomscroll.scrollOffsetX + state.zoomscroll.scrollOffsetMobileX;
export const selectScrollOffsetY = (state: RootState): number =>
   state.zoomscroll.scrollOffsetY + state.zoomscroll.scrollOffsetMobileY;

export default zoomScrollSlice.reducer;
