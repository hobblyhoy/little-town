/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import {
   buildColorCss,
   buildPositionCss,
   buildSizeCss,
   standardBaseCss,
} from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Big_Tl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.860031 76.458851"
         width="55.860031"
         height="76.458839"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2503.02,-520.29949)">
            <polygon
               className="st59"
               points="1464.98,303.65 1439.05,318.62 1439.05,299.65 1452.01,280.16 1464.98,284.68 "
               id="polygon7384-0"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st55"
               points="1413.12,303.65 1439.05,318.62 1439.05,299.65 1413.12,284.68 "
               id="polygon7390-5"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st60"
               points="1426.09,265.24 1439.05,269.75 1464.98,284.68 1452.01,280.16 "
               id="polygon7392-9"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st57"
               points="1413.12,284.72 1426.09,265.24 1452.01,280.16 1439.05,299.65 "
               id="polygon7394-1"
               transform="translate(1091.9,276.13847)"
            />
            <g id="g7452-4-5" transform="translate(968.12003,256.30942)">
               <g id="g7444-9-8">
                  <polygon
                     className="st59"
                     points="1588.76,304.41 1562.83,319.38 1562.83,300.41 1575.79,280.92 1588.76,285.44 "
                     id="polygon7440-2-7"
                  />
                  <polygon
                     className="st22"
                     points="1579.61,293.59 1571.98,297.99 1571.98,306.1 1579.61,301.69 "
                     id="polygon7442-3-9"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1562.83,319.38 1562.83,300.41 1536.9,285.44 1536.9,304.41 "
                  id="polygon7446-9-4"
               />
               <polygon
                  className="st60"
                  points="1562.83,270.51 1588.76,285.44 1575.79,280.92 1549.87,265.99 "
                  id="polygon7448-4-7"
               />
               <polygon
                  className="st57-no-fill"
                  css={buildColorCss(boardTopper.color!)}
                  points="1549.87,265.99 1575.79,280.92 1562.83,300.41 1536.9,285.48 "
                  id="polygon7450-2-3"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Tl_Topper;
