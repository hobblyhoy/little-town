/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ISlideOutBar } from '../../types/BarTypes';
import BarElement from './BarElement';
import { useState } from 'react';
import useBreakpoint from '../../app/useBreakpoint';

function SlideOutBar({ barElements, icon }: ISlideOutBar) {
   const [isExpanded, setIsExpanded] = useState(false);
   const { isDesktop } = useBreakpoint();

   const baseCss = css`
      background-color: black;
      opacity: 0.7;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      transform: translateX(${isExpanded ? '0' : 'calc(-100% + 60px)'});
      transition: transform 0.3s ease-out;
      pointer-events: auto;
   `;

   const primaryBarIconWrapperCss = css`
      border-left: 2px solid gray;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
   `;
   const primaryBarIconCss = css`
      width: 40px;
      height: 40px;
      margin: 10px;
   `;

   return (
      <div css={baseCss} className="flex">
         <div className="flex">
            {barElements.map(x => (
               <BarElement {...x} />
            ))}
         </div>
         <div
            css={primaryBarIconWrapperCss}
            className={`flex items-center ${isDesktop && 'hover:bg-white hover:bg-opacity-30'}`}
            onClick={() => setIsExpanded(x => !x)}
         >
            <div css={primaryBarIconCss}>{icon}</div>
         </div>
      </div>
   );
}

export default SlideOutBar;
