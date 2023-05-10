import { isBoardStateTopper } from '../../app/utils';
import {
   IBoardStateBase,
   IBoardStateTopper,
   ICartesianCoordinates,
   ICartesianOffset,
} from '../../types/BoardTypes';

export const positionCalc = (boardItem: IBoardStateBase) => {
   guardClauses(boardItem);

   let { cartX, cartY } = applyPrimaryPositioningLogic(boardItem);

   if (isBoardStateTopper(boardItem)) {
      const { offsetX, offsetY } = getCustomTopperOffsets(boardItem);
      cartX += offsetX;
      cartY += offsetY;
   }

   return { cartX, cartY };
};

const guardClauses = (boardItem: IBoardStateBase) => {
   if (boardItem.type !== 'tile' && boardItem.isoZ === 0)
      throw 'Only tiles can be at the 0th isoZ layer';
   if (boardItem.type !== 'topper' && boardItem.isoZ === 1)
      throw 'only toppers can be at the first layer';
   if (boardItem.isoZ > 1) throw 'may change this later but rn only doing layers 0 and 1';
};

const applyPrimaryPositioningLogic = (boardItem: IBoardStateBase): ICartesianCoordinates => {
   const tileWidth = 88;
   const tileTopHeight = 51;
   const tileBottomHeight = 41;

   const screenXBasePoint = 300; // TODO key off window.innerWidth (once!)
   const screenYBasePoint = 60;

   let cartX =
      screenXBasePoint + boardItem.isoX * tileWidth * 0.5 + -1 * boardItem.isoY * tileWidth * 0.5;
   let cartY =
      screenYBasePoint +
      boardItem.isoX * tileTopHeight * 0.5 +
      boardItem.isoY * tileTopHeight * 0.5 -
      boardItem.isoZ * tileBottomHeight;

   return { cartX, cartY };
};

const getCustomTopperOffsets = (boardTopper: IBoardStateTopper): ICartesianOffset => {
   if (boardTopper.topperType === 'tree') {
      if (boardTopper.topperSize === 'init') {
         throw 'unimplemented';
      } else if (boardTopper.topperSize === 'small') {
         return { offsetX: 30, offsetY: 30 };
      } else {
         return { offsetX: 0, offsetY: -14 };
      }
   } else if (boardTopper.topperType === 'house') {
      return { offsetX: 19, offsetY: 29 };
   }

   throw 'Topper missing from getCustomTopperOffsets';
};
