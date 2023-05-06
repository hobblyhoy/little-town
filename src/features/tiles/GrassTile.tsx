/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface IsometricCoordinates {
   isoX: number;
   isoY: number;
}

interface CartesianCoordinates {
   cartX: number;
   cartY: number;
}

// TODO this will be moved into its own function
const isometricToCartesian = ({ isoX, isoY }: IsometricCoordinates): CartesianCoordinates => {
   const tileWidth = 88;
   const tileHeight = 51;

   const screenXBasePoint = 500; // TODO key off window.innerWidth (once!)
   const screenYBasePoint = 10;

   const returnX = screenXBasePoint + (isoX * tileWidth) / 2 + (-1 * isoY * tileWidth) / 2;
   const returnY = screenYBasePoint + (isoY * tileHeight) / 2 + (isoX * tileHeight) / 2;

   return { cartX: returnX, cartY: returnY };
};

function GrassTile(isoProps: IsometricCoordinates) {
   let coords = isometricToCartesian(isoProps);

   const baseCss = css`
      position: fixed;
      top: ${coords.cartY}px;
      left: ${coords.cartX}px;
      width: 95px;
      height: 97px;
      pointer-events: none;
   `;

   const gCss = css`
      pointer-events: visiblePainted;

      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      &:hover {
         opacity: 0.75;
      }
   `;
   return (
      <svg
         version="1.1"
         x="0px"
         y="0px"
         viewBox="0 0 93.500001 95.669825"
         xmlSpace="preserve"
         width="93.5"
         height="95.669823"
         xmlns="http://www.w3.org/2000/svg"
         css={baseCss}
      >
         <g css={gCss} id="g8066" transform="translate(-363.2,-1437.64)">
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
