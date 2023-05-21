/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildColorCss, buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Tr_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.849999 57.379785"
         width="55.849998"
         height="57.379784"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1474.84,-263.24007)">
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
                  css={buildColorCss(boardTopper.color!)}
                  points="1502.76,299.65 1528.69,284.72 1515.72,265.24 1489.8,280.16 "
                  id="polygon7436"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Tr_Topper;
