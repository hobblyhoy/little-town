/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TlBr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.669827"
         width="93.489998"
         height="95.669823"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6126" transform="translate(-254.45,-1547.48)" css={tileGCss}>
            <g id="g6116">
               <g id="g6114">
                  <polygon
                     className="st40"
                     points="301.2,1549.48 295.6,1552.71 262.04,1572.08 256.45,1575.31 301.19,1601.15 306.79,1597.92 340.35,1578.54 345.94,1575.31 "
                     id="polygon6110"
                  />
                  <polygon
                     className="st6"
                     points="315.18,1593.08 331.96,1583.38 287.21,1557.55 270.43,1567.23 "
                     id="polygon6112"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="256.45,1595.31 256.45,1615.31 301.2,1641.15 301.2,1621.15 "
               id="polygon6118"
            />
            <polygon
               className="st12"
               points="256.45,1575.31 256.45,1595.31 301.2,1621.15 301.2,1601.15 "
               id="polygon6120"
            />
            <polygon
               className="st13"
               points="345.94,1575.31 345.94,1595.31 301.2,1621.15 301.2,1601.15 "
               id="polygon6122"
            />
            <polygon
               className="st4"
               points="301.2,1621.15 301.2,1641.15 345.94,1615.31 345.94,1595.31 331.97,1603.38 331.97,1583.39 315.17,1593.07 315.17,1613.08 "
               id="polygon6124"
            />
         </g>
      </svg>
   );
}

export default Road_TlBr_Tile;
