/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TlBlBr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6162" transform="translate(-42.05,-1651.26)" css={tileGCss}>
            <g id="g6152">
               <g id="g6150">
                  <polygon
                     className="st40"
                     points="83.19,1656.49 88.78,1653.26 133.55,1679.1 127.95,1682.33 94.38,1701.71 88.78,1704.94 44.05,1679.1 49.64,1675.87 "
                     id="polygon6146"
                  />
                  <polygon
                     className="st6"
                     points="88.79,1669.41 74.8,1661.34 58.03,1671.03 72.01,1679.1 58.02,1687.18 74.81,1696.86 88.79,1688.79 102.77,1696.86 119.56,1687.18 105.57,1679.1 "
                     id="polygon6148"
                  />
               </g>
            </g>
            <polygon
               className="st12"
               points="88.8,1724.94 88.8,1704.94 44.05,1679.09 44.05,1699.09 "
               id="polygon6154"
            />
            <polygon
               className="st13"
               points="88.8,1724.94 88.8,1704.94 133.55,1679.09 133.55,1699.09 "
               id="polygon6156"
            />
            <polygon
               className="st4"
               points="133.55,1719.09 133.55,1699.09 119.57,1707.17 119.57,1687.17 102.78,1696.86 102.78,1716.87 88.8,1724.94 88.8,1744.94 "
               id="polygon6158"
            />
            <polygon
               className="st3"
               points="44.05,1719.09 44.05,1699.09 58.03,1707.17 58.03,1687.17 74.82,1696.86 74.82,1716.87 88.8,1724.94 88.8,1744.94 "
               id="polygon6160"
            />
         </g>
      </svg>
   );
}

export default Road_TlBlBr_Tile;
