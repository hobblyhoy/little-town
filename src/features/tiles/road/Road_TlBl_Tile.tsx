/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function Road_TlBl_Tile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={standardBaseCss(cartProps)}
      >
         <g id="g6270" transform="translate(-42.05,-1752.28)" css={tileGCss}>
            <g id="g6260">
               <g id="g6258">
                  <polygon
                     className="st40"
                     points="127.95,1776.88 133.55,1780.11 88.8,1805.96 83.2,1802.73 49.64,1783.34 44.05,1780.11 88.8,1754.28 94.39,1757.51 "
                     id="polygon6254"
                  />
                  <polygon
                     className="st6"
                     points="74.81,1797.88 105.58,1780.12 74.81,1762.35 58.04,1772.04 72.02,1780.12 58.03,1788.19 "
                     id="polygon6256"
                  />
               </g>
            </g>
            <polygon
               className="st4"
               points="88.8,1845.96 88.8,1825.96 133.55,1800.11 133.55,1820.11 "
               id="polygon6262"
            />
            <polygon
               className="st12"
               points="88.8,1825.96 88.8,1805.96 44.05,1780.11 44.05,1800.11 "
               id="polygon6264"
            />
            <polygon
               className="st13"
               points="88.8,1825.96 88.8,1805.96 133.55,1780.11 133.55,1800.11 "
               id="polygon6266"
            />
            <polygon
               className="st3"
               points="44.05,1820.11 44.05,1800.11 58.03,1808.19 58.03,1788.19 74.82,1797.88 74.82,1817.88 88.8,1825.96 88.8,1845.96 "
               id="polygon6268"
            />
         </g>
      </svg>
   );
}

export default Road_TlBl_Tile;
