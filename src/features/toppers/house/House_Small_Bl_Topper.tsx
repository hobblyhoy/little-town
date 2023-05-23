/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildColorCss, buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Small_Bl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.849999 57.379785"
         width="55.849998"
         height="57.379784"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1344.91,-263.24007)">
            <g id="g7326">
               <g id="g7318">
                  <polygon
                     className="st55"
                     points="1372.83,299.65 1359.87,280.16 1346.91,284.68 1346.91,303.65 1372.83,318.62 "
                     id="polygon7314"
                  />
                  <polygon
                     className="st58"
                     points="1363.69,313.34 1356.05,308.93 1356.05,296.83 1363.69,301.24 "
                     id="polygon7316"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1398.76,284.68 1398.76,303.65 1372.83,318.62 1372.83,299.65 "
                  id="polygon7320"
               />
               <polygon
                  className="st60"
                  points="1359.87,280.16 1385.8,265.24 1372.83,269.75 1346.91,284.68 "
                  id="polygon7322"
               />
               <polygon
                  className="st57-no-fill"
                  css={buildColorCss(boardTopper.color!)}
                  points="1372.83,299.65 1398.76,284.72 1385.8,265.24 1359.87,280.16 "
                  id="polygon7324"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Small_Bl_Topper;
