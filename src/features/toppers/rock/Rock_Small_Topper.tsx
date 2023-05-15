/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Rock_Small_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 43.37994 37.479974"
         width="43.37994"
         height="37.479969"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-525.24004,-1386.99)">
            <g id="g7118">
               <g id="g7104">
                  <g id="g7096">
                     <polygon
                        className="st50"
                        points="544.9,1400.62 540.78,1396.88 548.73,1388.99 560.65,1392.94 557.86,1400.62 "
                        id="polygon7094"
                     />
                  </g>
                  <polygon
                     className="st51"
                     points="540.78,1396.88 534.81,1410.37 541.4,1416.36 544.9,1400.62 "
                     id="polygon7098"
                  />
                  <polygon
                     className="st52"
                     points="557.86,1400.62 562.16,1416.36 541.4,1416.36 544.9,1400.62 "
                     id="polygon7100"
                  />
                  <polygon
                     className="st53"
                     points="560.65,1392.94 566.62,1404.05 562.16,1416.36 557.86,1400.62 "
                     id="polygon7102"
                  />
               </g>
               <g id="g7116">
                  <g id="g7108">
                     <polygon
                        className="st50"
                        points="532.69,1413.96 530.47,1411.94 534.76,1407.68 541.21,1409.81 539.7,1413.96 "
                        id="polygon7106"
                     />
                  </g>
                  <polygon
                     className="st51"
                     points="530.47,1411.94 527.24,1419.23 530.8,1422.47 532.69,1413.96 "
                     id="polygon7110"
                  />
                  <polygon
                     className="st52"
                     points="539.7,1413.96 542.02,1422.47 530.8,1422.47 532.69,1413.96 "
                     id="polygon7112"
                  />
                  <polygon
                     className="st53"
                     points="541.21,1409.81 544.44,1415.82 542.02,1422.47 539.7,1413.96 "
                     id="polygon7114"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default Rock_Small_Topper;
