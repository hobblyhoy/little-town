/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_TrBr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6252" transform="translate(-147.87,-1752.28)" css={tileGCss}>
            <g id="g6242">
               <g id="g6240">
                  <polygon
                     className="st40"
                     points="194.61,1805.96 200.21,1802.73 233.77,1783.34 239.36,1780.11 194.62,1754.28 189.02,1757.51 155.46,1776.88 149.87,1780.11 "
                     id="polygon6236"
                  />
                  <polygon
                     className="st6"
                     points="208.6,1762.35 225.37,1772.04 211.4,1780.12 225.38,1788.19 208.6,1797.88 177.83,1780.12 "
                     id="polygon6238"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="149.87,1800.11 149.87,1820.11 194.62,1845.96 194.62,1825.96 "
               id="polygon6244"
            />
            <polygon
               className="st12"
               points="149.87,1780.11 149.87,1800.11 194.62,1825.96 194.62,1805.96 "
               id="polygon6246"
            />
            <polygon
               className="st13"
               points="239.36,1780.11 239.36,1800.11 194.62,1825.96 194.62,1805.96 "
               id="polygon6248"
            />
            <polygon
               className="st4"
               points="225.38,1808.19 225.38,1788.19 208.59,1797.88 208.59,1817.88 194.62,1825.96 194.62,1845.96 239.36,1820.11 239.36,1800.11 "
               id="polygon6250"
            />
         </g>
      </svg>
   );
}

export default Road_TrBr_Tile;
