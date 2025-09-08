/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBarElement } from '../../types/BarTypes';
import useBreakpoint from '../../app/useBreakpoint';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectedItem, setSelectedItem } from './SelectionBarSlice';
import { selectionBarUiNameMap } from '../../app/constants';
import { useEffect } from 'react';
import { harvestToppers } from '../game-state/GameStateSlice';

function BarElement({ internalName, icon, isDisabled }: IBarElement) {
   const { isDesktop } = useBreakpoint();
   const dispatch = useAppDispatch();
   const selectedItem = useAppSelector(selectSelectedItem);

   useEffect(() => {
      if (selectedItem === internalName && isDisabled) {
         dispatch(setSelectedItem(null));
      }
   }, [selectedItem, isDisabled]);
   const baseCss = css`
      padding: 10px;
   `;

   const iconCss = css`
      width: 40px;
      height: 40px;
   `;

   const nameCss = css`
      width: ${isDesktop ? '60px' : '40px'};
      height: 20px;
      font-size: ${isDesktop ? '1rem' : '0.8rem'};
   `;

   const handleClick = () => {
      if (internalName === 'harvest') {
         dispatch(harvestToppers());
      } else {
         dispatch(setSelectedItem(internalName));
      }
   };

   let whiteHoverClasses = '';
   if (isDisabled) {
      // No hover styles
   } else if (selectedItem === internalName) {
      whiteHoverClasses = 'bg-white bg-opacity-30';
   } else if (isDesktop) {
      whiteHoverClasses = 'hover:bg-white hover:bg-opacity-30';
   }

   const disableClasses = isDisabled
      ? 'saturate-0 opacity-50 cursor-default'
      : '';

   return (
      <div
         className={`flex flex-col items-center ${whiteHoverClasses} ${disableClasses}`}
         css={baseCss}
         onClick={handleClick}
      >
         <div css={iconCss}>{icon}</div>
         <div css={nameCss} className="flex justify-center items-center">
            {selectionBarUiNameMap[internalName]}
         </div>
      </div>
   );
}

export default BarElement;
