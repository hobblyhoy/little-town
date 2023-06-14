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

function House_Big_Bl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.908575 80.860013"
         width="55.908577"
         height="80.860001"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2246.6948,-507.94542)">
            <g id="g7326-8" transform="translate(901.78484,268.18556)">
               <g id="g7318-3">
                  <polygon
                     className="st55"
                     points="1346.91,284.68 1346.91,303.65 1372.83,318.62 1372.83,299.65 1359.87,280.16 "
                     id="polygon7314-9"
                  />
                  <polygon
                     className="st58"
                     points="1363.69,301.24 1363.69,313.34 1356.05,308.93 1356.05,296.83 "
                     id="polygon7316-1"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1372.83,299.65 1398.76,284.68 1398.76,303.65 1372.83,318.62 "
                  id="polygon7320-3"
               />
               <polygon
                  className="st60"
                  points="1346.91,284.68 1359.87,280.16 1385.8,265.24 1372.83,269.75 "
                  id="polygon7322-2"
               />
               <polygon
                  className="st57"
                  points="1359.87,280.16 1372.83,299.65 1398.76,284.72 1385.8,265.24 "
                  id="polygon7324-3"
               />
            </g>
            <g id="g7438-5" transform="translate(771.91342,249.43393)">
               <g id="g7430-2">
                  <polygon
                     className="st55"
                     points="1489.8,280.16 1476.84,284.68 1476.84,303.65 1502.76,318.62 1502.76,299.65 "
                     id="polygon7426-5"
                  />
                  <polygon
                     className="st59"
                     points="1493.62,297.24 1493.62,305.34 1485.98,300.93 1485.98,292.83 "
                     id="polygon7428-5"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1502.76,299.65 1528.69,284.68 1528.69,303.65 1502.76,318.62 "
                  id="polygon7432-8"
               />
               <polygon
                  className="st60"
                  points="1476.84,284.68 1489.8,280.16 1515.72,265.24 1502.76,269.75 "
                  id="polygon7434-9"
               />
               <polygon
                  className="st57-no-fill"
                  points="1489.8,280.16 1502.76,299.65 1528.69,284.72 1515.72,265.24 "
                  id="polygon7436-3"
                  css={buildColorCss(boardTopper.color!)}
               />
            </g>
            <g id="g7968-2" transform="matrix(0.68768546,0,0,0.68768546,951.40382,176.7926)">
               <polygon
                  className="st50"
                  points="1947.19,472.86 1937.09,478.69 1929.65,474.4 1939.76,468.56 "
                  id="polygon7954-6"
                  transform="translate(-9.560676,36.876892)"
               />
               <polygon
                  className="st62"
                  points="1947.19,450.97 1937.09,456.8 1929.65,452.51 1939.76,446.67 "
                  id="polygon7962-3"
                  transform="translate(-9.560676,36.876892)"
               />
               <polygon
                  className="st51-b"
                  points="1929.65,452.51 1929.65,474.4 1937.09,478.69 1937.09,456.8 "
                  id="polygon7964-3"
                  transform="translate(-9.560676,36.876892)"
               />
               <polygon
                  className="st53-b"
                  points="1947.19,450.97 1947.19,472.86 1937.09,478.69 1937.09,456.8 "
                  id="polygon7966-1"
                  transform="translate(-9.560676,36.876892)"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Bl_Topper;
