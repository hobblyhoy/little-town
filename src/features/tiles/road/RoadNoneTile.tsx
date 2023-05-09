/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function RoadNoneTile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={standardBaseCss(cartProps)}
      >
         <g id="g8066" transform="translate(-363.2,-1853.73)" css={tileGCss}>
            <g id="g6306">
               <g id="g6296">
                  <g id="g6294">
                     <polygon
                        className="st40"
                        points="454.7,1881.57 449.1,1884.8 415.55,1904.18 409.96,1907.41 365.2,1881.57 370.79,1878.34 404.37,1858.96 409.96,1855.73 "
                        id="polygon6290"
                     />
                     <polygon
                        className="st6"
                        points="393.16,1881.57 409.94,1871.88 426.73,1881.57 409.96,1891.26 "
                        id="polygon6292"
                     />
                  </g>
               </g>
               <polygon
                  className="st3"
                  points="365.2,1901.56 365.2,1921.56 409.95,1947.41 409.95,1927.41 "
                  id="polygon6298"
               />
               <polygon
                  className="st4"
                  points="454.7,1901.56 454.7,1921.56 409.95,1947.41 409.95,1927.41 "
                  id="polygon6300"
               />
               <polygon
                  className="st12"
                  points="365.2,1881.56 365.2,1901.56 409.95,1927.41 409.95,1907.41 "
                  id="polygon6302"
               />
               <polygon
                  className="st13"
                  points="454.7,1881.56 454.7,1901.56 409.95,1927.41 409.95,1907.41 "
                  id="polygon6304"
               />
            </g>
         </g>
      </svg>
   );
}

export default RoadNoneTile;
