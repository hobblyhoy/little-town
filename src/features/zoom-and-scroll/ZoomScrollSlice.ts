import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IZoomScrollState {
   zoom: number;
   //scroll: TODO
}

const initialState: IZoomScrollState = {
   zoom: 1,
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
   },
});

// reducer export
export const { zoomIn, zoomOut } = zoomScrollSlice.actions;

// selector export
export const selectZoom = (state: RootState) => state.zoomscroll.zoom;

export default zoomScrollSlice.reducer;
