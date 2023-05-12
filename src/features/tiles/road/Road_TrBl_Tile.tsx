/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TrBl_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.669827"
         width="93.489998"
         height="95.669823"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6144" transform="translate(-147.87,-1547.48)" css={tileGCss}>
            <g id="g6134">
               <g id="g6132">
                  <polygon
                     className="st40"
                     points="155.46,1578.54 149.87,1575.31 194.61,1549.48 200.21,1552.71 233.77,1572.08 239.36,1575.31 194.62,1601.15 189.02,1597.92 "
                     id="polygon6128"
                  />
                  <polygon
                     className="st6"
                     points="208.6,1557.55 225.38,1567.23 180.63,1593.08 163.85,1583.38 "
                     id="polygon6130"
                  />
               </g>
            </g>
            <polygon
               className="st4"
               points="194.62,1641.15 194.62,1621.15 239.36,1595.31 239.36,1615.31 "
               id="polygon6136"
            />
            <polygon
               className="st12"
               points="194.62,1621.15 194.62,1601.15 149.87,1575.31 149.87,1595.31 "
               id="polygon6138"
            />
            <polygon
               className="st13"
               points="194.62,1621.15 194.62,1601.15 239.36,1575.31 239.36,1595.31 "
               id="polygon6140"
            />
            <polygon
               className="st3"
               points="180.63,1593.07 180.63,1613.08 194.61,1621.15 194.61,1641.15 149.87,1615.31 149.87,1595.31 163.84,1603.38 163.84,1583.39 "
               id="polygon6142"
            />
         </g>
      </svg>
   );
}

export default Road_TrBl_Tile;
