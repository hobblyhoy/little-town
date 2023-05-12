/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TrBlBr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6180" transform="translate(-147.87,-1651.26)" css={tileGCss}>
            <g id="g6170">
               <g id="g6168">
                  <polygon
                     className="st40"
                     points="149.87,1679.1 155.46,1682.33 189.04,1701.71 194.63,1704.94 239.36,1679.1 233.77,1675.87 200.22,1656.49 194.63,1653.26 "
                     id="polygon6164"
                  />
                  <polygon
                     className="st6"
                     points="225.38,1671.03 211.4,1679.1 225.39,1687.18 208.61,1696.86 194.62,1688.79 180.64,1696.86 163.85,1687.18 177.84,1679.1 194.62,1669.41 208.61,1661.34 "
                     id="polygon6166"
                  />
               </g>
            </g>
            <polygon
               className="st12"
               points="149.87,1679.09 149.87,1699.09 194.62,1724.94 194.62,1704.94 "
               id="polygon6172"
            />
            <polygon
               className="st13"
               points="239.36,1679.09 239.36,1699.09 194.62,1724.94 194.62,1704.94 "
               id="polygon6174"
            />
            <polygon
               className="st4"
               points="225.38,1707.17 225.38,1687.17 208.59,1696.86 208.59,1716.87 194.62,1724.94 194.62,1744.94 239.36,1719.09 239.36,1699.09 "
               id="polygon6176"
            />
            <polygon
               className="st3"
               points="163.85,1707.17 163.85,1687.17 180.64,1696.86 180.64,1716.87 194.62,1724.94 194.62,1744.94 149.87,1719.09 149.87,1699.09 "
               id="polygon6178"
            />
         </g>
      </svg>
   );
}

export default Road_TrBlBr_Tile;
