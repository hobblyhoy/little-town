/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function Road_Br_Tile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.500002 95.679829"
         width="93.5"
         height="95.679825"
         css={standardBaseCss(cartProps)}
      >
         <g id="g6342" transform="translate(-42.05,-1853.73)" css={tileGCss}>
            <g id="g6332">
               <g id="g6330">
                  <polygon
                     className="st40"
                     points="83.19,1858.96 88.78,1855.73 133.55,1881.57 127.95,1884.8 94.38,1904.18 88.78,1907.41 44.05,1881.57 49.64,1878.34 "
                     id="polygon6326"
                  />
                  <polygon
                     className="st6"
                     points="72.01,1881.57 88.79,1871.88 119.56,1889.65 102.77,1899.33 "
                     id="polygon6328"
                  />
               </g>
            </g>
            <polygon
               className="st3"
               points="88.8,1947.41 88.8,1927.41 44.05,1901.56 44.05,1921.56 "
               id="polygon6334"
            />
            <polygon
               className="st12"
               points="88.8,1927.41 88.8,1907.41 44.05,1881.56 44.05,1901.56 "
               id="polygon6336"
            />
            <polygon
               className="st13"
               points="88.8,1927.41 88.8,1907.41 133.55,1881.56 133.55,1901.56 "
               id="polygon6338"
            />
            <polygon
               className="st4"
               points="133.55,1921.56 133.55,1901.56 119.57,1909.63 119.57,1889.64 102.78,1899.33 102.78,1919.33 88.8,1927.41 88.8,1947.41 "
               id="polygon6340"
            />
         </g>
      </svg>
   );
}

export default Road_Br_Tile;
