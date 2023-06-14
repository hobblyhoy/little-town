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

function House_Small_Bl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.850002 61.783678"
         width="55.850002"
         height="61.783669"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1326.3745,-265.1359)">
            <g id="g7326" transform="translate(-18.535511,6.2997158)">
               <g id="g7318">
                  <polygon
                     className="st55"
                     points="1346.91,284.68 1346.91,303.65 1372.83,318.62 1372.83,299.65 1359.87,280.16 "
                     id="polygon7314"
                  />
                  <polygon
                     className="st58"
                     points="1356.05,296.83 1363.69,301.24 1363.69,313.34 1356.05,308.93 "
                     id="polygon7316"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1372.83,318.62 1372.83,299.65 1398.76,284.68 1398.76,303.65 "
                  id="polygon7320"
               />
               <polygon
                  className="st60"
                  points="1372.83,269.75 1346.91,284.68 1359.87,280.16 1385.8,265.24 "
                  id="polygon7322"
               />
               <polygon
                  className="st57-no-fill"
                  points="1385.8,265.24 1359.87,280.16 1372.83,299.65 1398.76,284.72 "
                  id="polygon7324"
                  css={buildColorCss(boardTopper.color!)}
               />
            </g>
            <g id="g7968" transform="matrix(0.68768546,0,0,0.68768546,30.612258,-66.016915)">
               <g id="g4319" transform="translate(-35.169628,44.730304)">
                  <polygon
                     className="st50"
                     points="1939.76,468.56 1947.19,472.86 1937.09,478.69 1929.65,474.4 "
                     id="polygon7954"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st62"
                     points="1939.76,446.67 1947.19,450.97 1937.09,456.8 1929.65,452.51 "
                     id="polygon7962"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st51-b"
                     points="1937.09,456.8 1929.65,452.51 1929.65,474.4 1937.09,478.69 "
                     id="polygon7964"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st53-b"
                     points="1937.09,456.8 1947.19,450.97 1947.19,472.86 1937.09,478.69 "
                     id="polygon7966"
                     transform="translate(25.608952,-7.8534121)"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default House_Small_Bl_Topper;
