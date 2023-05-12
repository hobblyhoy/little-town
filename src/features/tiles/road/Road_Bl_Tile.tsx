/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_Bl_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 93.49 95.679829"
         width="93.489998"
         height="95.679825"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g6360" transform="translate(-147.87,-1853.73)" css={tileGCss}>
            <g id="g6350">
               <g id="g6348">
                  <polygon
                     className="st40"
                     points="194.62,1907.41 189.02,1904.18 155.46,1884.79 149.87,1881.56 194.61,1855.73 200.21,1858.96 233.77,1878.33 239.36,1881.56 "
                     id="polygon6344"
                  />
                  <polygon
                     className="st6"
                     points="180.63,1899.33 163.85,1889.64 194.62,1871.88 211.4,1881.56 "
                     id="polygon6346"
                  />
               </g>
            </g>
            <polygon
               className="st4"
               points="239.36,1901.56 239.36,1921.56 194.62,1947.41 194.62,1927.41 "
               id="polygon6352"
            />
            <polygon
               className="st12"
               points="149.87,1881.56 149.87,1901.56 194.62,1927.41 194.62,1907.41 "
               id="polygon6354"
            />
            <polygon
               className="st13"
               points="239.36,1881.56 239.36,1901.56 194.62,1927.41 194.62,1907.41 "
               id="polygon6356"
            />
            <polygon
               className="st3"
               points="163.84,1909.63 163.84,1889.64 180.63,1899.33 180.63,1919.33 194.61,1927.41 194.61,1947.41 149.87,1921.56 149.87,1901.56 "
               id="polygon6358"
            />
         </g>
      </svg>
   );
}

export default Road_Bl_Tile;
