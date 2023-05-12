/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { standardBaseCss, buildPositionCss, buildSizeCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Br_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.860001 57.379785"
         width="55.860001"
         height="57.379784"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-1411.12,-263.24007)">
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
                  className="st57"
                  points="1426.09,265.24 1452.01,280.16 1439.05,299.65 1413.12,284.72 "
                  id="polygon7394"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Br_Topper;
