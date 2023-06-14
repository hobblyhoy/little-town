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
         viewBox="0 0 55.901381 78.445103"
         width="55.901382"
         height="78.445091"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2409.1593,-520.92062)">
            <g id="g7396-8" transform="translate(998.08069,278.74586)">
               <g id="g7388-2">
                  <polygon
                     className="st59"
                     points="1439.05,318.62 1439.05,299.65 1452.01,280.16 1464.98,284.68 1464.98,303.65 "
                     id="polygon7384-6"
                  />
                  <polygon
                     className="st4"
                     points="1448.2,301.24 1448.2,313.34 1455.83,308.93 1455.83,296.83 "
                     id="polygon7386-1"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1439.05,299.65 1413.12,284.68 1413.12,303.65 1439.05,318.62 "
                  id="polygon7390-1"
               />
               <polygon
                  className="st60"
                  points="1464.98,284.68 1452.01,280.16 1426.09,265.24 1439.05,269.75 "
                  id="polygon7392-8"
               />
               <polygon
                  className="st57"
                  points="1452.01,280.16 1439.05,299.65 1413.12,284.72 1426.09,265.24 "
                  id="polygon7394-0"
               />
            </g>
            <g id="g7452-4" transform="translate(874.25931,259.31802)">
               <g id="g7444-9">
                  <polygon
                     className="st59"
                     points="1588.76,285.44 1588.76,304.41 1562.83,319.38 1562.83,300.41 1575.79,280.92 "
                     id="polygon7440-2"
                  />
                  <polygon
                     className="st22"
                     points="1571.98,297.99 1571.98,306.1 1579.61,301.69 1579.61,293.59 "
                     id="polygon7442-3"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1562.83,300.41 1536.9,285.44 1536.9,304.41 1562.83,319.38 "
                  id="polygon7446-9"
               />
               <polygon
                  className="st60"
                  points="1588.76,285.44 1575.79,280.92 1549.87,265.99 1562.83,270.51 "
                  id="polygon7448-4"
               />
               <polygon
                  className="st57-no-fill"
                  points="1575.79,280.92 1562.83,300.41 1536.9,285.48 1549.87,265.99 "
                  id="polygon7450-2"
                  css={buildColorCss(boardTopper.color!)}
               />
            </g>
            <g id="g4411-3" transform="translate(1057.0752,485.85243)">
               <polygon
                  className="st50"
                  points="1964.73,474.4 1954.62,468.56 1947.19,472.86 1957.29,478.69 "
                  id="polygon7954-8-6"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st62"
                  points="1964.73,452.51 1954.62,446.67 1947.19,450.97 1957.29,456.8 "
                  id="polygon7962-2-4"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st51-b"
                  points="1957.29,478.69 1957.29,456.8 1964.73,452.51 1964.73,474.4 "
                  id="polygon7964-0-3"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st53-b"
                  points="1957.29,478.69 1957.29,456.8 1947.19,450.97 1947.19,472.86 "
                  id="polygon7966-3-9"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Br_Topper;
