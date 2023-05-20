import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SelectableItem } from '../../types/BarTypes';



export interface ISelectionBarState {
   selectableItems: { internalName: SelectableItem; uiName: string }[];
   selectedItem: SelectableItem | null;
}

const initialState: ISelectionBarState = {
   selectableItems: [
      { internalName: 'remove', uiName: 'Remove' },
      { internalName: 'tree', uiName: 'Seed' },
      { internalName: 'road', uiName: 'Road' },
      { internalName: 'house', uiName: 'House' },
      { internalName: 'wheat', uiName: 'Wheat' },
      { internalName: 'rotate', uiName: 'Rotate' },
      { internalName: 'windmill', uiName: 'Windmill' },
      { internalName: 'harvest', uiName: 'Harvest' },
   ],
   selectedItem: null,
};

export const selectionBarSlice = createSlice({
   name: 'selectionbar',
   initialState,
   reducers: {
      setSelectedItem: (state, action: PayloadAction<SelectableItem>) => {
         state.selectedItem = state.selectedItem !== action.payload ? action.payload : null;
      },
   },
});

// reducer export
export const { setSelectedItem } = selectionBarSlice.actions;

// selector export
export const selectSelectedItem = (state: RootState) => state.selectionbar.selectedItem;
export const selectSelectableItems = (state: RootState) => state.selectionbar.selectableItems;

export default selectionBarSlice.reducer;
