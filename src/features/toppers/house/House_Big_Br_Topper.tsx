/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import {
   standardBaseCss,
   buildPositionCss,
   buildSizeCss,
   buildColorCss,
} from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Big_Br_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.901379 76.057644"
         width="55.901379"
         height="76.057632"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2409.1593,-523.30809)">
            <g id="g7396-8" transform="translate(998.08069,278.74586)">
               <g id="g7388-2">
                  <polygon
                     className="st59"
                     points="1464.98,284.68 1464.98,303.65 1439.05,318.62 1439.05,299.65 1452.01,280.16 "
                     id="polygon7384-6"
                  />
                  <polygon
                     className="st4"
                     points="1455.83,308.93 1455.83,296.83 1448.2,301.24 1448.2,313.34 "
                     id="polygon7386-1"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1413.12,303.65 1439.05,318.62 1439.05,299.65 1413.12,284.68 "
                  id="polygon7390-1"
               />
               <polygon
                  className="st60"
                  points="1426.09,265.24 1439.05,269.75 1464.98,284.68 1452.01,280.16 "
                  id="polygon7392-8"
               />
               <polygon
                  className="st57"
                  points="1413.12,284.72 1426.09,265.24 1452.01,280.16 1439.05,299.65 "
                  id="polygon7394-0"
               />
            </g>
            <g id="g7452-4" transform="translate(874.25931,259.31802)">
               <g id="g7444-9">
                  <polygon
                     className="st59"
                     points="1562.83,300.41 1575.79,280.92 1588.76,285.44 1588.76,304.41 1562.83,319.38 "
                     id="polygon7440-2"
                  />
                  <polygon
                     className="st22"
                     points="1579.61,301.69 1579.61,293.59 1571.98,297.99 1571.98,306.1 "
                     id="polygon7442-3"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1536.9,304.41 1562.83,319.38 1562.83,300.41 1536.9,285.44 "
                  id="polygon7446-9"
               />
               <polygon
                  className="st60"
                  points="1549.87,265.99 1562.83,270.51 1588.76,285.44 1575.79,280.92 "
                  id="polygon7448-4"
               />
               <polygon
                  className="st57-no-fill"
                  css={buildColorCss(boardTopper.color!)}
                  points="1536.9,285.48 1549.87,265.99 1575.79,280.92 1562.83,300.41 "
                  id="polygon7450-2"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Br_Topper;
