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

function House_Small_Br_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.859999 58.827069"
      width="55.860001"
      height="58.827061"
      css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1411.12,-261.79279)">
            <g id="g7396">
               <g id="g7388">
                  <polygon
                     className="st59"
                     points="1464.98,284.68 1464.98,303.65 1439.05,318.62 1439.05,299.65 1452.01,280.16 "
                     id="polygon7384"
                     />
                  <polygon
                     className="st4"
                     points="1455.83,296.83 1448.2,301.24 1448.2,313.34 1455.83,308.93 "
                     id="polygon7386"
                     />
               </g>
               <polygon
                  className="st55"
                  points="1439.05,318.62 1439.05,299.65 1413.12,284.68 1413.12,303.65 "
                  id="polygon7390"
                  />
               <polygon
                  className="st60"
                  points="1439.05,269.75 1464.98,284.68 1452.01,280.16 1426.09,265.24 "
                  id="polygon7392"
                  />
               <polygon
                  className="st57-no-fill"
                  points="1426.09,265.24 1452.01,280.16 1439.05,299.65 1413.12,284.72 "
                  id="polygon7394"
                  css={buildColorCss(boardTopper.color!)}
               />
            </g>
            <g id="g4411" transform="translate(59.237017,226.7246)">
               <polygon
                  className="st50"
                  points="1954.62,468.56 1947.19,472.86 1957.29,478.69 1964.73,474.4 "
                  id="polygon7954-8"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st62"
                  points="1954.62,446.67 1947.19,450.97 1957.29,456.8 1964.73,452.51 "
                  id="polygon7962-2"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st51-b"
                  points="1957.29,456.8 1964.73,452.51 1964.73,474.4 1957.29,478.69 "
                  id="polygon7964-0"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st53-b"
                  points="1957.29,456.8 1947.19,450.97 1947.19,472.86 1957.29,478.69 "
                  id="polygon7966-3"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Small_Br_Topper;
