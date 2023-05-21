/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { standardBaseCss, buildPositionCss, buildSizeCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Tree_Big_Xmas_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 39.580002 73.320003"
         width="39.580002"
         height="73.319992"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-342.08,-1350.15)">
            <g id="g6962">
               <ellipse
                  className="st45"
                  cx="361.85999"
                  cy="1412.87"
                  rx="15.94"
                  ry="8.6000004"
                  id="ellipse6952"
               />
               <path
                  className="st19"
                  d="m 361.86,1412.87 v 0 c -2.32,0 -4.2,-1.88 -4.2,-4.2 v -29.11 c 0,-2.32 1.88,-4.2 4.2,-4.2 v 0 c 2.32,0 4.2,1.88 4.2,4.2 v 29.11 c 0,2.32 -1.88,4.2 -4.2,4.2 z"
                  id="path6954"
               />
               <path
                  className="st45"
                  d="m 378.88,1394.06 v 0 l -0.01,-0.03 c -0.11,-0.21 -0.23,-0.41 -0.37,-0.62 l -13.84,-23.32 c -0.06,-0.11 -0.12,-0.21 -0.19,-0.32 v -0.01 0 c -0.57,-0.83 -1.53,-1.38 -2.61,-1.38 -1.22,0 -2.28,0.7 -2.81,1.71 l -13.82,23.29 c -0.14,0.21 -0.27,0.43 -0.38,0.65 l -0.01,0.01 v 0 c -0.49,0.94 -0.76,1.94 -0.76,2.98 0,5.67 7.96,10.27 17.79,10.27 9.83,0 17.79,-4.6 17.79,-10.27 -0.02,-1.01 -0.28,-2.01 -0.78,-2.96 z"
                  id="path6956"
               />
               <path
                  className="st45"
                  d="m 376.66,1381.24 v 0 l -0.01,-0.02 c -0.1,-0.18 -0.2,-0.36 -0.32,-0.54 l -12.03,-20.27 c -0.05,-0.09 -0.1,-0.19 -0.16,-0.27 v -0.01 0 c -0.5,-0.72 -1.33,-1.2 -2.27,-1.2 -1.06,0 -1.98,0.6 -2.44,1.49 l -12.02,20.25 c -0.12,0.18 -0.23,0.37 -0.33,0.56 l -0.01,0.01 v 0 c -0.43,0.82 -0.66,1.69 -0.66,2.59 0,4.93 6.92,8.93 15.46,8.93 8.54,0 15.46,-4 15.46,-8.93 -0.01,-0.9 -0.24,-1.77 -0.67,-2.59 z"
                  id="path6958"
               />
               <path
                  className="st45"
                  d="m 373.02,1368.97 v 0 l -0.01,-0.02 c -0.07,-0.14 -0.15,-0.27 -0.24,-0.4 l -9.08,-15.29 c -0.04,-0.07 -0.08,-0.14 -0.12,-0.21 v 0 0 c -0.37,-0.55 -1,-0.9 -1.71,-0.9 -0.8,0 -1.5,0.46 -1.84,1.12 l -9.07,15.27 c -0.09,0.14 -0.18,0.28 -0.25,0.42 l -0.01,0.01 v 0 c -0.32,0.62 -0.5,1.27 -0.5,1.95 0,3.72 5.22,6.74 11.66,6.74 6.44,0 11.66,-3.02 11.66,-6.74 0.01,-0.68 -0.16,-1.34 -0.49,-1.95 z"
                  id="path6960"
               />
            </g>
         </g>
      </svg>
   );
}

export default Tree_Big_Xmas_Topper;
