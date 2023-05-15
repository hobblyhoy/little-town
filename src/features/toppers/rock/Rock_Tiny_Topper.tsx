/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Rock_Tiny_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 43.970817 31.976996"
         width="43.970818"
         height="31.976992"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-466.42497,-1392.8575)">
            <g id="g7092" transform="matrix(0.73301616,0,0,0.73301616,137.26859,382.91069)">
               <g id="g7084">
                  <polygon
                     className="st50"
                     points="489.14,1392.05 501.06,1395.99 498.27,1403.68 485.3,1403.68 481.19,1399.94 "
                     id="polygon7082"
                  />
               </g>
               <polygon
                  className="st51"
                  points="481.81,1419.42 485.3,1403.68 481.19,1399.94 475.22,1413.42 "
                  id="polygon7086"
               />
               <polygon
                  className="st52"
                  points="481.81,1419.42 485.3,1403.68 498.27,1403.68 502.57,1419.42 "
                  id="polygon7088"
               />
               <polygon
                  className="st53"
                  points="502.57,1419.42 498.27,1403.68 501.06,1395.99 507.03,1407.11 "
                  id="polygon7090"
               />
            </g>
            <g id="g7092-3" transform="matrix(0.49355279,0,0,0.49355279,232.8659,706.79446)">
               <g id="g7084-3">
                  <polygon
                     className="st50"
                     points="485.3,1403.68 481.19,1399.94 489.14,1392.05 501.06,1395.99 498.27,1403.68 "
                     id="polygon7082-2"
                  />
               </g>
               <polygon
                  className="st51"
                  points="481.81,1419.42 485.3,1403.68 481.19,1399.94 475.22,1413.42 "
                  id="polygon7086-1"
               />
               <polygon
                  className="st52"
                  points="481.81,1419.42 485.3,1403.68 498.27,1403.68 502.57,1419.42 "
                  id="polygon7088-8"
               />
               <polygon
                  className="st53"
                  points="502.57,1419.42 498.27,1403.68 501.06,1395.99 507.03,1407.11 "
                  id="polygon7090-2"
               />
            </g>
         </g>
      </svg>
   );
}

export default Rock_Tiny_Topper;
