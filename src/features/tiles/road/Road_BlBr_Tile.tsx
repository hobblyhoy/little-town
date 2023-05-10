/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function Road_BlBr_Tile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={standardBaseCss(cartProps)}
      >
         <g id="g6288" transform="translate(-363.2,-1752.28)" css={tileGCss}>
            <g id="g6278">
               <g id="g6276">
                  <polygon
                     className="st40"
                     points="454.7,1780.12 449.1,1776.89 415.55,1757.51 409.96,1754.28 365.2,1780.12 370.79,1783.35 404.37,1802.73 409.96,1805.96 "
                     id="polygon6272"
                  />
                  <polygon
                     className="st6"
                     points="379.18,1788.2 409.95,1770.43 440.72,1788.2 423.94,1797.88 409.95,1789.81 395.97,1797.88 "
                     id="polygon6274"
                  />
               </g>
            </g>
            <polygon
               className="st12"
               points="365.2,1780.11 365.2,1800.11 409.95,1825.96 409.95,1805.96 "
               id="polygon6280"
            />
            <polygon
               className="st13"
               points="454.7,1780.11 454.7,1800.11 409.95,1825.96 409.95,1805.96 "
               id="polygon6282"
            />
            <polygon
               className="st4"
               points="409.95,1825.96 409.95,1845.96 454.7,1820.11 454.7,1800.11 440.72,1808.19 440.72,1788.19 423.93,1797.88 423.93,1817.88 "
               id="polygon6284"
            />
            <polygon
               className="st3"
               points="409.95,1825.96 409.95,1845.96 365.2,1820.11 365.2,1800.11 379.18,1808.19 379.18,1788.19 395.97,1797.88 395.97,1817.88 "
               id="polygon6286"
            />
         </g>
      </svg>
   );
}

export default Road_BlBr_Tile;
