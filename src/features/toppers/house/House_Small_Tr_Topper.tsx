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

function House_Small_Tr_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.849997 63.794214"
         width="55.849998"
         height="63.794205"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}

      >
         <g id="g8066" transform="translate(-1474.84,-256.82565)">
            <g id="g7438">
               <g id="g7430">
                  <polygon
                     className="st55"
                     points="1502.76,318.62 1502.76,299.65 1489.8,280.16 1476.84,284.68 1476.84,303.65 "
                     id="polygon7426"
                  />
                  <polygon
                     className="st59"
                     points="1493.62,305.34 1485.98,300.93 1485.98,292.83 1493.62,297.24 "
                     id="polygon7428"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1528.69,284.68 1528.69,303.65 1502.76,318.62 1502.76,299.65 "
                  id="polygon7432"
               />
               <polygon
                  className="st60"
                  points="1489.8,280.16 1515.72,265.24 1502.76,269.75 1476.84,284.68 "
                  id="polygon7434"
               />
               <polygon
                  className="st57-no-fill"
                  points="1502.76,299.65 1528.69,284.72 1515.72,265.24 1489.8,280.16 "
                  id="polygon7436"
                  css={buildColorCss(boardTopper.color!)}

               />
            </g>
            <g id="g7968-3" transform="matrix(0.70425676,0,0,0.53634688,141.08946,-1.4505395)">
               <g id="g4319-0" transform="translate(-35.169628,44.730304)">
                  <polygon
                     className="st50"
                     points="1937.09,478.69 1929.65,474.4 1939.76,468.56 1947.19,472.86 "
                     id="polygon7954-0"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st62"
                     points="1937.09,456.8 1929.65,452.51 1939.76,446.67 1947.19,450.97 "
                     id="polygon7962-6"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st51-b"
                     points="1929.65,474.4 1937.09,478.69 1937.09,456.8 1929.65,452.51 "
                     id="polygon7964-4"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st53-b"
                     points="1947.19,472.86 1937.09,478.69 1937.09,456.8 1947.19,450.97 "
                     id="polygon7966-37"
                     transform="translate(25.608952,-7.8534121)"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default House_Small_Tr_Topper;
