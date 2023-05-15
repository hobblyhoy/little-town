/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Windmill_Br_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 62.308472 90.89986"
         width="62.308472"
         height="90.899849"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2365.7844,-619.82948)">
            <g id="g7240-8-4" transform="translate(816.83689,158.60934)">
               <g id="g7236-7-5">
                  <path
                     className="st54"
                     d="m 1595.16,496.26 h -44.21 v 20.55 0 20.56 c 0,2.69 1.46,5.39 4.4,7.64 0.62,0.48 1.31,0.94 2.07,1.38 1.44,0.83 3.03,1.52 4.72,2.07 3.37,1.11 7.14,1.66 10.91,1.66 5.66,0 11.31,-1.24 15.63,-3.73 2.16,-1.25 3.78,-2.69 4.86,-4.22 1.08,-1.54 1.62,-3.17 1.62,-4.8 v -20.55 c 0,0 0,0 0,-0.01 z"
                     id="path7228-0-1"
                  />
                  <g id="g7234-1-0">
                     <g id="g7232-1-3">
                        <path
                           className="st55"
                           d="m 1557.42,505.29 v 0 c -8.63,-4.98 -8.63,-13.07 0,-18.05 v 0 c 8.63,-4.98 22.63,-4.98 31.26,0 v 0 c 8.63,4.98 8.63,13.07 0,18.05 v 0 c -8.63,4.98 -22.63,4.98 -31.26,0 z"
                           id="path7230-2-5"
                        />
                     </g>
                  </g>
               </g>
               <path
                  className="st57"
                  d="m 1594.11,492.38 v 0 0 c -0.38,-0.69 -0.87,-1.36 -1.45,-2.01 l -19.61,-27.15 -19.61,27.15 c -0.58,0.65 -1.07,1.32 -1.44,2 l -0.01,0.01 v 0 c -2.43,4.4 -0.62,9.41 5.43,12.91 v 0 c 8.63,4.98 22.63,4.98 31.26,0 v 0 c 6.05,-3.49 7.86,-8.51 5.43,-12.91 z"
                  id="path7238-2-1"
               />
            </g>
            <g id="g7248-3" transform="translate(692.54286,157.69308)">
               <polygon
                  className="st38"
                  points="1700.71,502.74 1700.71,511.37 1733.55,492.41 1733.55,497.13 1733.55,505.76 1716.97,515.33 1716.97,506.7 1684.13,525.66 1684.13,523.94 1684.13,520.94 1684.13,512.32 "
                  id="polygon7242-6"
               />
               <polygon
                  className="st38"
                  points="1717.08,493.44 1710.61,497.18 1710.61,540.96 1707.07,543.01 1700.6,546.74 1700.6,524.63 1707.07,520.89 1707.07,477.11 1710.61,475.07 1717.08,471.33 "
                  id="polygon7244-0"
               />
               <ellipse
                  transform="matrix(0.3916,-0.9202,0.9202,0.3916,571.3483,1882.1232)"
                  className="st38"
                  cx="1708.84"
                  cy="509.04001"
                  rx="7.4499998"
                  ry="4.21"
                  id="ellipse7246-8"
               />
            </g>
         </g>
      </svg>
   );
}

export default Windmill_Br_Topper;
