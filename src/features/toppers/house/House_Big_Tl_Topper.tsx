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
         viewBox="0 0 55.860029 82.881429"
         width="55.860031"
         height="82.881416"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}

      >
         <g id="g8066" transform="translate(-2503.02,-513.87691)">
            <polygon
               className="st59"
               points="1439.05,299.65 1452.01,280.16 1464.98,284.68 1464.98,303.65 1439.05,318.62 "
               id="polygon7384-0"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st55"
               points="1439.05,299.65 1413.12,284.68 1413.12,303.65 1439.05,318.62 "
               id="polygon7390-5"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st60"
               points="1464.98,284.68 1452.01,280.16 1426.09,265.24 1439.05,269.75 "
               id="polygon7392-9"
               transform="translate(1091.9,276.13847)"
            />
            <polygon
               className="st57"
               points="1452.01,280.16 1439.05,299.65 1413.12,284.72 1426.09,265.24 "
               id="polygon7394-1"
               transform="translate(1091.9,276.13847)"
            />
            <g id="g7452-4-5" transform="translate(968.12003,256.30942)">
               <g id="g7444-9-8">
                  <polygon
                     className="st59"
                     points="1562.83,300.41 1575.79,280.92 1588.76,285.44 1588.76,304.41 1562.83,319.38 "
                     id="polygon7440-2-7"
                  />
                  <polygon
                     className="st22"
                     points="1571.98,306.1 1579.61,301.69 1579.61,293.59 1571.98,297.99 "
                     id="polygon7442-3-9"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1536.9,285.44 1536.9,304.41 1562.83,319.38 1562.83,300.41 "
                  id="polygon7446-9-4"
               />
               <polygon
                  className="st60"
                  points="1575.79,280.92 1549.87,265.99 1562.83,270.51 1588.76,285.44 "
                  id="polygon7448-4-7"
               />
               <polygon
                  className="st57-no-fill"
                  points="1562.83,300.41 1536.9,285.48 1549.87,265.99 1575.79,280.92 "
                  id="polygon7450-2-3"
                  css={buildColorCss(boardTopper.color!)}

               />
            </g>
            <g id="g4411-0-5" transform="matrix(1.019034,0,0,0.82434595,1132.9687,484.96859)">
               <polygon
                  className="st50"
                  points="1964.73,474.4 1954.62,468.56 1947.19,472.86 1957.29,478.69 "
                  id="polygon7954-8-8-2"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st62"
                  points="1964.73,452.51 1954.62,446.67 1947.19,450.97 1957.29,456.8 "
                  id="polygon7962-2-8-8"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st51-b"
                  points="1957.29,478.69 1957.29,456.8 1964.73,452.51 1964.73,474.4 "
                  id="polygon7964-0-0-7"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st53-b"
                  points="1957.29,478.69 1957.29,456.8 1947.19,450.97 1947.19,472.86 "
                  id="polygon7966-3-5-8"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Tl_Topper;
