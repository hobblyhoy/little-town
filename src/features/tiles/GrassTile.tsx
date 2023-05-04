/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import grassTile from '../../assets/isopack/land/spring/grass.png';

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
   const tileWidth = 87;
   const tileHeight = 51;

   const screenXBasePoint = 500; // TODO key off window.innerWidth (once!)
   const screenYBasePoint = 0;

   const returnX = screenXBasePoint + (isoX * tileWidth / 2) + (-1 * isoY * tileWidth / 2);
   const returnY = screenYBasePoint + (isoY * tileHeight / 2) + (isoX * tileHeight / 2);

   return { cartX: returnX, cartY: returnY };
};

function GrassTile(isoProps: IsometricCoordinates) {
   let coords = isometricToCartesian(isoProps);
   
   const baseCss = css`
      top: ${coords.cartY}px;
      left: ${coords.cartX}px;
   `

   //return <img css={baseCss} className="fixed hover:opacity-75" src={grassTile} />;
   // Problem! These are rendering down at the bottom of the page where they exist on
   // the asset sheet rather than where they should be on the page. Might be resolvable idk
   return <svg>
      <g xmlns="http://www.w3.org/2000/svg">
		<polygon className="st3" points="365.2,1485.47 365.2,1505.47 409.95,1531.31 409.95,1511.31   "/>
		<polygon className="st4" points="454.7,1485.46 454.7,1505.46 409.95,1531.31 409.95,1511.31   "/>
		<polygon className="st40" points="409.95,1491.31 404.35,1488.08 370.79,1468.7 365.2,1465.47 409.95,1439.64 415.54,1442.86     449.1,1462.24 454.7,1465.46   "/>
		<polygon className="st12" points="365.2,1465.47 365.2,1485.47 409.95,1511.31 409.95,1491.31   "/>
		<polygon className="st13" points="454.7,1465.46 454.7,1485.46 409.95,1511.31 409.95,1491.31   "/>
	</g>
   </svg>
}

export default GrassTile;
