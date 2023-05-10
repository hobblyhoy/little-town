/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function Road_Tr_Tile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={standardBaseCss(cartProps)}
      >
         <g id="g6324" transform="translate(-254.45,-1853.73)" css={tileGCss}>
            <g id="g6314">
               <g id="g6312">
                  <polygon
                     className="st40"
                     points="340.35,1878.35 345.94,1881.58 301.2,1907.41 295.6,1904.18 262.04,1884.81 256.45,1881.58 301.19,1855.73 306.79,1858.96 "
                     id="polygon6308"
                  />
                  <polygon
                     className="st6"
                     points="301.19,1891.26 284.41,1881.58 315.18,1863.81 331.96,1873.5 "
                     id="polygon6310"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="301.2,1947.41 301.2,1927.41 256.45,1901.56 256.45,1921.56 "
               id="polygon6316"
            />
            <polygon
               className="st4"
               points="301.2,1947.41 301.2,1927.41 345.94,1901.56 345.94,1921.56 "
               id="polygon6318"
            />
            <polygon
               className="st12"
               points="301.2,1927.41 301.2,1907.41 256.45,1881.56 256.45,1901.56 "
               id="polygon6320"
            />
            <polygon
               className="st13"
               points="301.2,1927.41 301.2,1907.41 345.94,1881.56 345.94,1901.56 "
               id="polygon6322"
            />
         </g>
      </svg>
   );
}

export default Road_Tr_Tile;
