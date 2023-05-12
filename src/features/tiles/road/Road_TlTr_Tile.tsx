/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from '../../../app/constants';
import { IBoardTileProps } from '../../../types/BoardTypes';

function Road_TlTr_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6234" transform="translate(-254.45,-1752.28)" css={tileGCss}>
            <g id="g6224">
               <g id="g6222">
                  <polygon
                     className="st40"
                     points="295.62,1757.51 301.21,1754.28 345.94,1780.12 340.35,1783.35 306.8,1802.73 301.21,1805.96 256.45,1780.12 262.04,1776.89 "
                     id="polygon6218"
                  />
                  <polygon
                     className="st6"
                     points="301.2,1770.43 287.22,1762.36 270.43,1772.04 301.2,1789.81 331.97,1772.04 315.18,1762.36 "
                     id="polygon6220"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="301.2,1845.96 301.2,1825.96 256.45,1800.11 256.45,1820.11 "
               id="polygon6226"
            />
            <polygon
               className="st4"
               points="301.2,1845.96 301.2,1825.96 345.94,1800.11 345.94,1820.11 "
               id="polygon6228"
            />
            <polygon
               className="st12"
               points="301.2,1825.96 301.2,1805.96 256.45,1780.11 256.45,1800.11 "
               id="polygon6230"
            />
            <polygon
               className="st13"
               points="301.2,1825.96 301.2,1805.96 345.94,1780.11 345.94,1800.11 "
               id="polygon6232"
            />
         </g>
      </svg>
   );
}

export default Road_TlTr_Tile;
