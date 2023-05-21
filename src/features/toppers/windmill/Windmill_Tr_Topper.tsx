/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildColorCss, buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Windmill_Tr_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 62.000256 90.89986"
         width="62.000256"
         height="90.899849"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2555.6321,-623.92692)">
            <g id="g7212-5" transform="translate(811.00241,151.61628)">
               <polygon
                  className="st23"
                  points="1764.65,523.77 1765.11,524.64 1769.68,533.38 1781.41,524.52 1776.83,515.77 1800.05,498.22 1797.55,493.44 1792.97,484.69 1781.25,493.56 1785.82,502.3 1762.6,519.86 1764.14,522.79 "
                  id="polygon7206-1"
               />
               <polygon
                  className="st23"
                  points="1774.33,499 1797.55,543.37 1798.63,542.55 1799.9,541.6 1800.05,541.48 1804.63,538.02 1792.9,515.61 1788.33,519.07 1765.11,474.7 1762.6,476.6 1758.03,480.06 1769.76,502.46 "
                  id="polygon7208-1"
               />
               <ellipse
                  transform="matrix(0.9202,-0.3916,0.3916,0.9202,-57.0862,738.1249)"
                  className="st23"
                  cx="1781.33"
                  cy="509.04001"
                  rx="4.21"
                  ry="7.4499998"
                  id="ellipse7210-7"
               />
            </g>
            <g id="g7240-8-4-2" transform="translate(1006.6846,162.70678)">
               <g id="g7236-7-5-3">
                  <path
                     className="st54"
                     d="m 1595.16,496.26 h -44.21 v 20.55 0 20.56 c 0,2.69 1.46,5.39 4.4,7.64 0.62,0.48 1.31,0.94 2.07,1.38 1.44,0.83 3.03,1.52 4.72,2.07 3.37,1.11 7.14,1.66 10.91,1.66 5.66,0 11.31,-1.24 15.63,-3.73 2.16,-1.25 3.78,-2.69 4.86,-4.22 1.08,-1.54 1.62,-3.17 1.62,-4.8 v -20.55 c 0,0 0,0 0,-0.01 z"
                     id="path7228-0-1-3"
                  />
                  <g id="g7234-1-0-0">
                     <g id="g7232-1-3-1">
                        <path
                           className="st55"
                           d="m 1557.42,505.29 v 0 c -8.63,-4.98 -8.63,-13.07 0,-18.05 v 0 c 8.63,-4.98 22.63,-4.98 31.26,0 v 0 c 8.63,4.98 8.63,13.07 0,18.05 v 0 c -8.63,4.98 -22.63,4.98 -31.26,0 z"
                           id="path7230-2-5-3"
                        />
                     </g>
                  </g>
               </g>
               <path
                  className="st57-no-fill"
                  css={buildColorCss(boardTopper.color!)}
                  d="m 1594.11,492.38 v 0 0 c -0.38,-0.69 -0.87,-1.36 -1.45,-2.01 l -19.61,-27.15 -19.61,27.15 c -0.58,0.65 -1.07,1.32 -1.44,2 l -0.01,0.01 v 0 c -2.43,4.4 -0.62,9.41 5.43,12.91 v 0 c 8.63,4.98 22.63,4.98 31.26,0 v 0 c 6.05,-3.49 7.86,-8.51 5.43,-12.91 z"
                  id="path7238-2-1-0"
               />
            </g>
         </g>
      </svg>
   );
}

export default Windmill_Tr_Topper;
