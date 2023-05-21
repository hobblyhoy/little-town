import { boardSize } from '../../app/constants';
import { isBoardStateTopper } from '../../app/utils';
import {
   IBoardStateBase,
   IBoardStateTopper,
   ICartesianCoordinates,
   ICartesianOffset,
} from '../../types/BoardTypes';

export const getBoardItemPosition = (
   boardItem: IBoardStateBase,
   zoom: number
): ICartesianCoordinates => {
   guardClauses(boardItem);

   let { cartX, cartY } = applyPrimaryPositioningLogic(boardItem, zoom);

   if (isBoardStateTopper(boardItem)) {
      const { offsetX, offsetY } = getCustomTopperOffsets(boardItem);
      cartX += offsetX * zoom;
      cartY += offsetY * zoom;
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

const applyPrimaryPositioningLogic = (
   boardItem: IBoardStateBase,
   zoom: number
): ICartesianCoordinates => {
   const tileWidth = 88 * zoom;
   const tileTopHeight = 51 * zoom;
   const tileBottomHeight = 41 * zoom;

   const screenXBasePoint = window.innerWidth / 2 - tileWidth / 2;
   const screenYBasePoint =
      window.innerHeight / 2 -
      (tileTopHeight * boardSize) / 2 -
      tileBottomHeight;

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
   switch (boardTopper.topperType) {
      case 'tree':
         switch (boardTopper.size) {
            case 'tiny':
               return { offsetX: 39, offsetY: 60 };
            case 'small':
               return { offsetX: 32, offsetY: 31 };
            case 'big':
               return { offsetX: 24, offsetY: 10 };
            default: {
               throw new Error('invalid tree size');
            }
         }

      case 'house':
         return { offsetX: 19, offsetY: 29 };

      case 'wheat':
         switch (boardTopper.size) {
            case 'small':
               return { offsetX: 15, offsetY: 49 };
            case 'big':
               return { offsetX: 15, offsetY: 41 };
            default: {
               throw new Error('invalid wheat size');
            }
         }

      case 'windmill':
         switch (boardTopper.direction) {
            case 'bottomLeft':
            case 'topLeft':
               return { offsetX: 10, offsetY: -10 };
            case 'bottomRight':
            case 'topRight':
               return { offsetX: 24, offsetY: -10 };
            default:
               throw new Error('invalid windmill direction');
         }

      case 'rock':
         switch (boardTopper.size) {
            case 'tiny':
               return { offsetX: 28, offsetY: 50 };
            case 'small':
               return { offsetX: 28, offsetY: 46 };
            case 'big':
               return { offsetX: 22, offsetY: 40 };
            default: {
               throw new Error('invalid rock size');
            }
         }

      default:
         throw new Error('Topper missing from getCustomTopperOffsets');
   }
};
