/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ICartesianCoordinates } from '../../types/BoardTypes';
import { standardBaseCss, tileGCss } from '../../app/constants';

function GrassTile(cartProps: ICartesianCoordinates) {
   return (
      <svg
         x="0px"
         y="0px"
         viewBox="0 0 93.500001 95.669825"
         xmlSpace="preserve"
         width="93.5"
         height="95.669823"
         css={standardBaseCss(cartProps)}
      >
         <g
            css={tileGCss}
            id="g8066"
            transform="translate(-363.2,-1437.64)"
         >
            <g id="g6066">
               <polygon
                  className="st3"
                  points="409.95,1531.31 409.95,1511.31 365.2,1485.47 365.2,1505.47 "
                  id="polygon6056"
               />
               <polygon
                  className="st4"
                  points="409.95,1531.31 409.95,1511.31 454.7,1485.46 454.7,1505.46 "
                  id="polygon6058"
               />
               <polygon
                  className="st40"
                  points="449.1,1462.24 454.7,1465.46 409.95,1491.31 404.35,1488.08 370.79,1468.7 365.2,1465.47 409.95,1439.64 415.54,1442.86 "
                  id="polygon6060"
               />
               <polygon
                  className="st12"
                  points="409.95,1511.31 409.95,1491.31 365.2,1465.47 365.2,1485.47 "
                  id="polygon6062"
               />
               <polygon
                  className="st13"
                  points="409.95,1511.31 409.95,1491.31 454.7,1465.46 454.7,1485.46 "
                  id="polygon6064"
               />
            </g>
         </g>
      </svg>
   );
}

export default GrassTile;
