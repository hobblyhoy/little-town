/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBoardTopperProps, } from '../../../types/BoardTypes';
import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';

function Tree_Small_Circular_Topper({cartCoords, pixelSize}: IBoardTopperProps) {

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 33.930001 47.049963"
         width="33.93"
         height="47.049961"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-304.79,-1376.42)">
            <g id="g6970">
               <ellipse
                  className="st45"
                  cx="321.73999"
                  cy="1416.21"
                  rx="9.75"
                  ry="5.2600002"
                  id="ellipse6964"
               />
               <path
                  className="st19"
                  d="m 321.74,1416.21 v 0 c -1.42,0 -2.57,-1.15 -2.57,-2.57 v -17.8 c 0,-1.42 1.15,-2.57 2.57,-2.57 v 0 c 1.42,0 2.57,1.15 2.57,2.57 v 17.8 c 0,1.42 -1.15,2.57 -2.57,2.57 z"
                  id="path6966"
               />
               <path
                  className="st45"
                  d="m 336.72,1393.39 c 0,7.39 -5.36,13.53 -12.4,14.75 -0.84,0.15 -1.69,0.22 -2.57,0.22 -0.88,0 -1.74,-0.07 -2.57,-0.22 -3.94,-0.68 -7.35,-2.9 -9.59,-6.02 -0.66,-0.92 -1.22,-1.92 -1.66,-2.98 v 0 c -0.74,-1.77 -1.14,-3.71 -1.14,-5.75 0,-8.27 6.7,-14.97 14.97,-14.97 1.82,0 3.56,0.32 5.17,0.92 0.19,0.07 0.37,0.14 0.56,0.22 0.89,0.37 1.73,0.82 2.52,1.34 4.04,2.68 6.71,7.28 6.71,12.49 z"
                  id="path6968"
               />
            </g>
         </g>
      </svg>
   );
}

export default Tree_Small_Circular_Topper;
