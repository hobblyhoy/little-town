/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from "../../../app/constants";
import { IBoardTopperProps } from "../../../types/BoardTypes";

function Wheat_High_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 64.420006 47.279825"
         width="64.420006"
         height="47.279823"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2196.7556,-127.58496)">
            <g id="g8036">
               <g id="g8030" transform="translate(-1.0243581,-13.316655)">
                  <polygon
                     className="st29"
                     points="2256.42,216.55 2260.2,218.73 2229.99,236.17 2226.21,233.99 2203.56,220.91 2199.78,218.73 2229.99,201.29 2233.77,203.47 "
                     id="polygon8024"
                     transform="translate(0,-58.388412)"
                  />
                  <polygon
                     className="st63"
                     points="2229.99,244.57 2229.99,236.17 2199.78,218.73 2199.78,227.13 "
                     id="polygon8026"
                     transform="translate(0,-58.388412)"
                  />
                  <polygon
                     className="st64"
                     points="2229.99,244.57 2229.99,236.17 2260.2,218.73 2260.2,227.12 "
                     id="polygon8028"
                     transform="translate(0,-58.388412)"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default Wheat_High_Topper;
