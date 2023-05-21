/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { standardBaseCss, buildPositionCss, buildSizeCss } from "../../../app/constants";
import { IBoardTopperProps } from "../../../types/BoardTypes";

function Tree_Small_Xmas_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 27.66 45.600005"
         width="27.66"
         height="45.599998"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-385,-1377.87)">
            <g id="g6980">
               <ellipse
                  className="st45"
                  cx="398.82999"
                  cy="1415.75"
                  rx="10.6"
                  ry="5.7199998"
                  id="ellipse6972"
               />
               <path
                  className="st19"
                  d="m 398.83,1415.75 v 0 c -1.54,0 -2.8,-1.25 -2.8,-2.8 v -19.36 c 0,-1.54 1.25,-2.8 2.8,-2.8 v 0 c 1.54,0 2.8,1.25 2.8,2.8 v 19.36 c -0.01,1.55 -1.26,2.8 -2.8,2.8 z"
                  id="path6974"
               />
               <path
                  className="st45"
                  d="m 410.15,1403.24 v 0 l -0.01,-0.02 c -0.07,-0.14 -0.16,-0.28 -0.24,-0.41 l -9.2,-15.51 c -0.04,-0.07 -0.08,-0.14 -0.12,-0.21 v 0 0 c -0.38,-0.55 -1.02,-0.92 -1.74,-0.92 -0.81,0 -1.52,0.46 -1.87,1.14 l -9.19,15.49 c -0.09,0.14 -0.18,0.28 -0.26,0.43 l -0.01,0.01 v 0 c -0.33,0.63 -0.51,1.29 -0.51,1.98 0,3.77 5.3,6.83 11.83,6.83 6.53,0 11.83,-3.06 11.83,-6.83 0,-0.69 -0.18,-1.35 -0.51,-1.98 z"
                  id="path6976"
               />
               <path
                  className="st45"
                  d="m 408.67,1394.71 v 0 l -0.01,-0.02 c -0.06,-0.12 -0.14,-0.24 -0.21,-0.36 l -8,-13.48 c -0.03,-0.06 -0.07,-0.12 -0.11,-0.18 v 0 0 c -0.33,-0.48 -0.88,-0.8 -1.51,-0.8 -0.71,0 -1.32,0.4 -1.62,0.99 l -7.99,13.47 c -0.08,0.12 -0.16,0.25 -0.22,0.37 l -0.01,0.01 v 0 c -0.29,0.55 -0.44,1.12 -0.44,1.72 0,3.28 4.6,5.94 10.28,5.94 5.68,0 10.28,-2.66 10.28,-5.94 0,-0.59 -0.15,-1.17 -0.44,-1.72 z"
                  id="path6978"
               />
            </g>
         </g>
      </svg>
   );
}

export default Tree_Small_Xmas_Topper;