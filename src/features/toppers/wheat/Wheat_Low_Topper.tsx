/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from "../../../app/constants";
import { IBoardTopperProps } from "../../../types/BoardTypes";

function Wheat_Low_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 64.419601 38.879938"
         width="64.419601"
         height="38.879936"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2194.7071,-84.220476)">
            <g id="g8036">
               <g id="g8030" transform="translate(-1.0243581,-13.316655)">
                  <polygon
                     className="st29"
                     points="2199.78,218.73 2229.99,201.29 2233.77,203.47 2256.42,216.55 2260.2,218.73 2229.99,236.17 2226.21,233.99 2203.56,220.91 "
                     id="polygon8024"
                     transform="translate(-2.0487162,-101.7529)"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default Wheat_Low_Topper;
