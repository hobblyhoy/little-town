/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectableItems, selectSelectedItem, setSelectedItem } from './SelectionBarSlice';

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

   const selectionItemCss = (item: string) => css`
      color: ${item === selectedItem ? 'blue' : 'white'};
      cursor: pointer;
   `;

   return (
      <div css={baseCss}>
         {selectableItems.map(item => (
            <div
               css={selectionItemCss(item)}
               key={item}
               onClick={() => dispatch(setSelectedItem(item))}
            >
               {item}
            </div>
         ))}
      </div>
   );
}

export default SelectionBar;
