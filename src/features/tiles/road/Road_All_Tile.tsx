/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss, tileGCss } from "../../../app/constants";
import { IBoardTileProps } from "../../../types/BoardTypes";

function Road_All_Tile({ cartCoords, pixelSize }: IBoardTileProps) {
   return (
      <svg
         x="0px"
         y="0px"
         viewBox="0 0 93.500002 95.669827"
         xmlSpace="preserve"
         width="93.5"
         height="95.669823"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-363.2,-1547.48)" css={tileGCss}>
            <g id="g6108">
               <g id="g6098">
                  <g id="g6096">
                     <polygon
                        className="st40"
                        points="370.79,1578.54 365.2,1575.31 409.95,1549.48 415.54,1552.71 449.1,1572.08 454.7,1575.31 409.95,1601.15 404.35,1597.92 "
                        id="polygon6092"
                     />
                     <polygon
                        className="st6"
                        points="409.95,1585 423.93,1593.07 440.72,1583.39 426.73,1575.31 440.71,1567.23 423.93,1557.55 409.95,1565.62 395.96,1557.55 379.19,1567.24 393.17,1575.31 379.18,1583.38 395.96,1593.08 "
                        id="polygon6094"
                     />
                  </g>
               </g>
               <polygon
                  className="st12"
                  points="409.95,1621.15 409.95,1601.15 365.2,1575.31 365.2,1595.31 "
                  id="polygon6100"
               />
               <polygon
                  className="st13"
                  points="409.95,1621.15 409.95,1601.15 454.7,1575.31 454.7,1595.31 "
                  id="polygon6102"
               />
               <polygon
                  className="st4"
                  points="423.93,1593.07 423.93,1613.08 409.95,1621.15 409.95,1641.15 454.7,1615.31 454.7,1595.31 440.72,1603.38 440.72,1583.39 "
                  id="polygon6104"
               />
               <polygon
                  className="st3"
                  points="395.97,1593.07 395.97,1613.08 409.95,1621.15 409.95,1641.15 365.2,1615.31 365.2,1595.31 379.18,1603.38 379.18,1583.39 "
                  id="polygon6106"
               />
            </g>
         </g>
      </svg>
   );
}

export default Road_All_Tile;
