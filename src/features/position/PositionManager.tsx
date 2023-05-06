import { CartesianCoordinates, IsometricCoordinatesWithType } from '../../types/positionTypes';

function PositionManager() {
   //return <React.Fragment></React.Fragment>;
   return <></>;
}

// This guys job will be big and important so we might carve him out into littler pieces
// his main job will be taking in the isometric world views x,y,z values and using that to
// position elements into the world
// That means figuring out
// the 3d isometric conversion to 2d screen space and
// accounting for current zoom
// accounting for current scroll position
export default PositionManager;

export const isometricToCartesian = ({
   isoX,
   isoY,
   isoZ,
   type,
   offsetX,
   offsetY,
}: IsometricCoordinatesWithType): CartesianCoordinates => {
   const tileWidth = 88;
   const tileTopHeight = 51;
   const tileBottomHeight = 41;
   const topperSetback = 15;

   const screenXBasePoint = 500; // TODO key off window.innerWidth (once!)
   const screenYBasePoint = 60;

   if (type !== 'tile' && isoZ === 0) throw 'Only tiles can be at the 0th isoZ layer';

   let returnX = screenXBasePoint + isoX * tileWidth * 0.5 + -1 * isoY * tileWidth * 0.5;
   let returnY =
      screenYBasePoint +
      isoX * tileTopHeight * 0.5 +
      isoY * tileTopHeight * 0.5 -
      isoZ * tileBottomHeight;

   // Lastly, toppers come in all shapes, sizes, and positions so we custom offset each topper
   if (offsetX) returnX += offsetX;
   if (offsetY) returnY += offsetY;

   return { cartX: returnX, cartY: returnY };
};
