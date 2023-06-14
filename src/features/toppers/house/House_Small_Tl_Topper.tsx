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

function House_Small_Tl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.859999 63.626356"
         width="55.860001"
         height="63.626347"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1534.9,-257.7535)">
            <g id="g7452">
               <g id="g7444">
                  <polygon
                     className="st59"
                     points="1575.79,280.92 1588.76,285.44 1588.76,304.41 1562.83,319.38 1562.83,300.41 "
                     id="polygon7440"
                  />
                  <polygon
                     className="st22"
                     points="1579.61,293.59 1571.98,297.99 1571.98,306.1 1579.61,301.69 "
                     id="polygon7442"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1562.83,319.38 1562.83,300.41 1536.9,285.44 1536.9,304.41 "
                  id="polygon7446"
               />
               <polygon
                  className="st60"
                  points="1562.83,270.51 1588.76,285.44 1575.79,280.92 1549.87,265.99 "
                  id="polygon7448"
               />
               <polygon
                  className="st57-no-fill"
                  points="1549.87,265.99 1575.79,280.92 1562.83,300.41 1536.9,285.48 "
                  id="polygon7450"
                  css={buildColorCss(boardTopper.color!)}
               />
            </g>
            <g id="g4411-0" transform="matrix(1.019034,0,0,0.82434595,164.95438,228.84518)">
               <polygon
                  className="st50"
                  points="1954.62,468.56 1947.19,472.86 1957.29,478.69 1964.73,474.4 "
                  id="polygon7954-8-8"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st62"
                  points="1954.62,446.67 1947.19,450.97 1957.29,456.8 1964.73,452.51 "
                  id="polygon7962-2-8"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st51-b"
                  points="1957.29,456.8 1964.73,452.51 1964.73,474.4 1957.29,478.69 "
                  id="polygon7964-0-0"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
               <polygon
                  className="st53-b"
                  points="1957.29,456.8 1947.19,450.97 1947.19,472.86 1957.29,478.69 "
                  id="polygon7966-3-5"
                  transform="matrix(0.68768546,0,0,0.68768546,31.443044,-270.72492)"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Small_Tl_Topper;
