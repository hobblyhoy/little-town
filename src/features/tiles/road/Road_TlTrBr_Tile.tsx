/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TlTrBr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6198" transform="translate(-254.45,-1651.26)" css={tileGCss}>
            <g id="g6188">
               <g id="g6186">
                  <polygon
                     className="st40"
                     points="295.62,1656.49 301.21,1653.26 345.94,1679.1 340.35,1682.33 306.8,1701.71 301.21,1704.94 256.45,1679.1 262.04,1675.87 "
                     id="polygon6182"
                  />
                  <polygon
                     className="st6"
                     points="331.97,1671.03 315.19,1661.34 301.2,1669.41 287.22,1661.34 270.43,1671.03 284.42,1679.1 301.2,1688.79 315.19,1696.87 331.96,1687.18 317.98,1679.1 "
                     id="polygon6184"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="301.2,1744.94 301.2,1724.94 256.45,1699.09 256.45,1719.09 "
               id="polygon6190"
            />
            <polygon
               className="st12"
               points="301.2,1724.94 301.2,1704.94 256.45,1679.09 256.45,1699.09 "
               id="polygon6192"
            />
            <polygon
               className="st13"
               points="301.2,1724.94 301.2,1704.94 345.94,1679.09 345.94,1699.09 "
               id="polygon6194"
            />
            <polygon
               className="st4"
               points="315.17,1696.86 315.17,1716.87 301.2,1724.94 301.2,1744.94 345.94,1719.09 345.94,1699.09 331.97,1707.17 331.97,1687.17 "
               id="polygon6196"
            />
         </g>
      </svg>
   );
}

export default Road_TlTrBr_Tile;
