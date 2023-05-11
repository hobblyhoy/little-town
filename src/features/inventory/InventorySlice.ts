import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IInventoryState {
   money: number;
   lumber: number;
   wheat: number;
}

const initialState: IInventoryState = {
   money: 20,
   lumber: 0,
   wheat: 0
}

export const InventorySlice = createSlice({
   name: 'inventory',
   initialState,
   reducers: {
      // none 
   }
})