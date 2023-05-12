/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from '../../../app/constants';
import { IBoardTileProps } from '../../../types/BoardTypes';

function Road_TlTrBl_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6216" transform="translate(-363.2,-1651.26)" css={tileGCss}>
            <g id="g6206">
               <g id="g6204">
                  <polygon
                     className="st40"
                     points="365.2,1679.1 370.79,1682.33 404.34,1701.71 409.93,1704.94 454.7,1679.1 449.1,1675.87 415.52,1656.49 409.93,1653.26 "
                     id="polygon6200"
                  />
                  <polygon
                     className="st6"
                     points="409.94,1669.41 423.92,1661.34 440.71,1671.03 426.72,1679.1 409.94,1688.79 395.95,1696.87 379.18,1687.18 393.16,1679.1 379.17,1671.03 395.95,1661.34 "
                     id="polygon6202"
                  />
               </g>
            </g>
            <polygon
               className="st4"
               points="454.7,1699.09 454.7,1719.09 409.95,1744.94 409.95,1724.94 "
               id="polygon6208"
            />
            <polygon
               className="st12"
               points="365.2,1679.09 365.2,1699.09 409.95,1724.94 409.95,1704.94 "
               id="polygon6210"
            />
            <polygon
               className="st13"
               points="454.7,1679.09 454.7,1699.09 409.95,1724.94 409.95,1704.94 "
               id="polygon6212"
            />
            <polygon
               className="st3"
               points="409.94,1724.94 409.94,1744.94 365.2,1719.09 365.2,1699.09 379.18,1707.17 379.18,1687.17 395.97,1696.86 395.97,1716.87 "
               id="polygon6214"
            />
         </g>
      </svg>
   );
}

export default Road_TlTrBl_Tile;
