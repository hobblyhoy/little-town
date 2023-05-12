/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectableItems, selectSelectedItem, setSelectedItem } from './SelectionBarSlice';
import { selectInventory } from '../game-state/GameStateSlice';

function SelectionBar() {
   const baseCss = css`
      background-color: black;
      position: fixed;
      left: 20px;
      bottom: 20px;
      right: 20px;
      height: 200px;
      border-radius: 20px;
      opacity: 0.75;
   `;

   const dispatch = useAppDispatch();

   const selectedItem = useAppSelector(selectSelectedItem);
   const selectableItems = useAppSelector(selectSelectableItems);
   const inventory = useAppSelector(selectInventory);

   const selectionItemCss = (item: string) => css`
      color: ${item === selectedItem ? 'blue' : 'white'};
      cursor: pointer;
   `;

   return (
      <div css={baseCss} className="flex justify-between">
         <div>
            {selectableItems.map(item => (
               <div
                  css={selectionItemCss(item.internalName)}
                  key={item.internalName}
                  onClick={() => dispatch(setSelectedItem(item.internalName))}
               >
                  {item.uiName}
               </div>
            ))}
         </div>
         <div>
            <div>Inventory</div>
            <div>Money: {inventory.money}</div>
            <div>Lumber: {inventory.lumber}</div>
            <div>Wheat: {inventory.wheat}</div>
         </div>
      </div>
   );
}

export default SelectionBar;
