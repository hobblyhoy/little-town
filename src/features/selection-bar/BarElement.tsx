/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBarElement } from '../../types/BarTypes';
import useBreakpoint from '../../app/useBreakpoint';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectedItem, setSelectedItem } from './SelectionBarSlice';
import { selectionBarUiNameMap } from '../../app/constants';

function BarElement({ internalName, icon }: IBarElement) {
   const { isDesktop } = useBreakpoint();
   const dispatch = useAppDispatch();
   const selectedItem = useAppSelector(selectSelectedItem);

   const baseCss = css`
      padding: 10px;
   `;

   const iconCss = css`
      width: 40px;
      height: 40px;
   `;

   const nameCss = css`
      width: 60px;
      height: 20px;
   `;

   const handleClick = () => {
      dispatch(setSelectedItem(internalName));
   };

   let whiteHoverClasses = '';
   if (selectedItem === internalName) {
      whiteHoverClasses = 'bg-white bg-opacity-30';
   } else if (isDesktop) {
      whiteHoverClasses = 'hover:bg-white hover:bg-opacity-30';
   }

   return (
      <div
         className={`flex flex-col items-center ${whiteHoverClasses}`}
         css={baseCss}
         onClick={handleClick}
      >
         <div css={iconCss}>{icon}</div>
         {isDesktop && (
            <div css={nameCss} className="flex justify-center items-center">
               {selectionBarUiNameMap[internalName]}
            </div>
         )}
      </div>
   );
}

export default BarElement;
