/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Windmill_Tl_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 61.920723 91.032764"
         width="61.920723"
         height="91.032753"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2712.6502,-619.69659)">
            <g id="g7256-5" transform="translate(896.40012,146.99649)">
               <polygon
                  className="st38"
                  points="1846.05,515.77 1822.83,498.22 1825.33,493.44 1829.91,484.69 1841.63,493.56 1837.06,502.3 1860.28,519.86 1858.74,522.79 1858.23,523.77 1857.77,524.64 1853.2,533.38 1841.47,524.52 "
                  id="polygon7250-4"
               />
               <polygon
                  className="st38"
                  points="1822.83,541.48 1818.25,538.02 1829.98,515.61 1834.55,519.07 1857.77,474.7 1860.28,476.6 1864.85,480.06 1853.13,502.46 1848.55,499 1825.33,543.37 1824.25,542.55 1822.98,541.6 "
                  id="polygon7252-4"
               />
               <ellipse
                  transform="matrix(0.3916,-0.9202,0.9202,0.3916,652.0964,2004.2384)"
                  className="st38"
                  cx="1841.55"
                  cy="509.04001"
                  rx="7.4499998"
                  ry="4.21"
                  id="ellipse7254-5"
               />
            </g>
            <g id="g7240-8-4-2-9" transform="translate(1177.4109,158.60935)">
               <g id="g7236-7-5-3-3">
                  <path
                     className="st54"
                     d="m 1595.16,496.26 h -44.21 v 20.55 0 20.56 c 0,2.69 1.46,5.39 4.4,7.64 0.62,0.48 1.31,0.94 2.07,1.38 1.44,0.83 3.03,1.52 4.72,2.07 3.37,1.11 7.14,1.66 10.91,1.66 5.66,0 11.31,-1.24 15.63,-3.73 2.16,-1.25 3.78,-2.69 4.86,-4.22 1.08,-1.54 1.62,-3.17 1.62,-4.8 v -20.55 c 0,0 0,0 0,-0.01 z"
                     id="path7228-0-1-3-8"
                  />
                  <g id="g7234-1-0-0-3">
                     <g id="g7232-1-3-1-1">
                        <path
                           className="st55"
                           d="m 1557.42,505.29 v 0 c -8.63,-4.98 -8.63,-13.07 0,-18.05 v 0 c 8.63,-4.98 22.63,-4.98 31.26,0 v 0 c 8.63,4.98 8.63,13.07 0,18.05 v 0 c -8.63,4.98 -22.63,4.98 -31.26,0 z"
                           id="path7230-2-5-3-0"
                        />
                     </g>
                  </g>
               </g>
               <path
                  className="st57"
                  d="m 1594.11,492.38 v 0 0 c -0.38,-0.69 -0.87,-1.36 -1.45,-2.01 l -19.61,-27.15 -19.61,27.15 c -0.58,0.65 -1.07,1.32 -1.44,2 l -0.01,0.01 v 0 c -2.43,4.4 -0.62,9.41 5.43,12.91 v 0 c 8.63,4.98 22.63,4.98 31.26,0 v 0 c 6.05,-3.49 7.86,-8.51 5.43,-12.91 z"
                  id="path7238-2-1-0-9"
               />
            </g>
         </g>
      </svg>
   );
}

export default Windmill_Tl_Topper;
