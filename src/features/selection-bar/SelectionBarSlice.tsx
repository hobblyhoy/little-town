import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type SelectableItem = 'tree' | 'road' | 'house';

export interface ISelectionBarState {
   selectableItems: SelectableItem[];
   selectedItem: SelectableItem | null;
}

const initialState: ISelectionBarState = {
   selectableItems: ['tree', 'road', 'house'], //should actually be 'seed' instead of tree but we'll cross that bridge when we get to it 
   selectedItem: null,
};

export const selectionBarSlice = createSlice({
   name: 'selectionbar',
   initialState,
   reducers: {
      setSelectedItem: (state, action: PayloadAction<SelectableItem>) => {
         state.selectedItem = action.payload;
      },
   },
});

// reducer export
export const {setSelectedItem} = selectionBarSlice.actions;

// selector export
export const selectSelectedItem = (state: RootState) => state.selectionbar.selectedItem;
export const selectSelectableItems = (state: RootState) => state.selectionbar.selectableItems;

export default selectionBarSlice.reducer;