/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildColorCss, buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Windmill_Bl_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 61.870152 90.89986"
         width="61.870152"
         height="90.899849"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-2178.7962,-615.1427)">
            <g id="g7240-8" transform="translate(643.50632,153.92256)">
               <g id="g7236-7">
                  <path
                     className="st54"
                     d="m 1595.16,496.26 h -44.21 v 20.55 0 20.56 c 0,2.69 1.46,5.39 4.4,7.64 0.62,0.48 1.31,0.94 2.07,1.38 1.44,0.83 3.03,1.52 4.72,2.07 3.37,1.11 7.14,1.66 10.91,1.66 5.66,0 11.31,-1.24 15.63,-3.73 2.16,-1.25 3.78,-2.69 4.86,-4.22 1.08,-1.54 1.62,-3.17 1.62,-4.8 v -20.55 c 0,0 0,0 0,-0.01 z"
                     id="path7228-0"
                  />
                  <g id="g7234-1">
                     <g id="g7232-1">
                        <path
                           className="st55"
                           d="m 1557.42,505.29 v 0 c -8.63,-4.98 -8.63,-13.07 0,-18.05 v 0 c 8.63,-4.98 22.63,-4.98 31.26,0 v 0 c 8.63,4.98 8.63,13.07 0,18.05 v 0 c -8.63,4.98 -22.63,4.98 -31.26,0 z"
                           id="path7230-2"
                        />
                     </g>
                  </g>
               </g>
               <path
                  className="st57-no-fill"
                  css={buildColorCss(boardTopper.color!)}
                  d="m 1594.11,492.38 v 0 0 c -0.38,-0.69 -0.87,-1.36 -1.45,-2.01 l -19.61,-27.15 -19.61,27.15 c -0.58,0.65 -1.07,1.32 -1.44,2 l -0.01,0.01 v 0 c -2.43,4.4 -0.62,9.41 5.43,12.91 v 0 c 8.63,4.98 22.63,4.98 31.26,0 v 0 c 6.05,-3.49 7.86,-8.51 5.43,-12.91 z"
                  id="path7238-2"
               />
            </g>
            <g id="g7204-4" transform="translate(558.29617,149.41536)">
               <polygon
                  className="st23"
                  points="1655.33,502.74 1655.33,511.37 1622.5,492.41 1622.5,497.13 1622.5,505.76 1639.08,515.33 1639.08,506.7 1671.92,525.66 1671.92,523.94 1671.92,520.94 1671.92,512.32 "
                  id="polygon7198-6"
               />
               <polygon
                  className="st23"
                  points="1638.97,493.44 1645.44,497.18 1645.44,540.96 1648.98,543.01 1655.45,546.74 1655.45,524.63 1648.98,520.89 1648.98,477.11 1645.44,475.07 1638.97,471.33 "
                  id="polygon7200-3"
               />
               <ellipse
                  transform="matrix(0.9202,-0.3916,0.3916,0.9202,-67.7949,685.6094)"
                  className="st23"
                  cx="1647.21"
                  cy="509.04001"
                  rx="4.21"
                  ry="7.4499998"
                  id="ellipse7202-6"
               />
            </g>
         </g>
      </svg>
   );
}

export default Windmill_Bl_Topper;
