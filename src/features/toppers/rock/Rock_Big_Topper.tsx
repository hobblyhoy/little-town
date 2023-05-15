/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function Rock_Big_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 52.779942 38.289976"
         width="52.779942"
         height="38.28997"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-586.65004,-1386.59)">
            <g id="g7156">
               <g id="g7130">
                  <g id="g7122">
                     <polygon
                        className="st50"
                        points="609.34,1388.59 621.26,1392.53 618.47,1400.22 605.5,1400.22 601.39,1396.47 "
                        id="polygon7120"
                     />
                  </g>
                  <polygon
                     className="st51"
                     points="602,1415.95 605.5,1400.22 601.39,1396.47 595.42,1409.96 "
                     id="polygon7124"
                  />
                  <polygon
                     className="st52"
                     points="602,1415.95 605.5,1400.22 618.47,1400.22 622.76,1415.95 "
                     id="polygon7126"
                  />
                  <polygon
                     className="st53"
                     points="622.76,1415.95 618.47,1400.22 621.26,1392.53 627.23,1403.65 "
                     id="polygon7128"
                  />
               </g>
               <g id="g7142">
                  <g id="g7134">
                     <polygon
                        className="st50"
                        points="596.17,1408.08 602.62,1410.22 601.11,1414.37 594.1,1414.37 591.88,1412.35 "
                        id="polygon7132"
                     />
                  </g>
                  <polygon
                     className="st51"
                     points="592.21,1422.88 594.1,1414.37 591.88,1412.35 588.65,1419.64 "
                     id="polygon7136"
                  />
                  <polygon
                     className="st52"
                     points="592.21,1422.88 594.1,1414.37 601.11,1414.37 603.43,1422.88 "
                     id="polygon7138"
                  />
                  <polygon
                     className="st53"
                     points="603.43,1422.88 601.11,1414.37 602.62,1410.22 605.85,1416.23 "
                     id="polygon7140"
                  />
               </g>
               <g id="g7154">
                  <g id="g7146">
                     <polygon
                        className="st50"
                        points="627.76,1405.52 634.2,1407.65 632.7,1411.81 625.69,1411.81 623.46,1409.78 "
                        id="polygon7144"
                     />
                  </g>
                  <polygon
                     className="st51"
                     points="623.79,1420.32 625.69,1411.81 623.46,1409.78 620.23,1417.08 "
                     id="polygon7148"
                  />
                  <polygon
                     className="st52"
                     points="623.79,1420.32 625.69,1411.81 632.7,1411.81 635.02,1420.32 "
                     id="polygon7150"
                  />
                  <polygon
                     className="st53"
                     points="635.02,1420.32 632.7,1411.81 634.2,1407.65 637.43,1413.66 "
                     id="polygon7152"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default Rock_Big_Topper;
