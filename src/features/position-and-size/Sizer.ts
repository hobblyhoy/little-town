import { isBoardStateTile, isBoardStateTopper } from '../../app/utils';
import { IBoardStateBase, IPixelSize } from '../../types/BoardTypes';

export const getBoardItemSize = (boardTopper: IBoardStateBase, zoom: number): IPixelSize => {
   var pixelSize = getBoardItemSizeBase(boardTopper);
   return { width: pixelSize.width * zoom, height: pixelSize.height * zoom };
};

const getBoardItemSizeBase = (boardItem: IBoardStateBase): IPixelSize => {
   if (isBoardStateTile(boardItem)) {
      return { width: 95, height: 97 };
   }

   if (isBoardStateTopper(boardItem)) {
      switch (boardItem.topperType) {
         case 'tree':
            switch (boardItem.size) {
               case 'init':
                  return { width: 16, height: 14 };
               case 'small':
                  return { width: 34, height: 47 };
               case 'big':
                  return { width: 48, height: 67 };
               default: {
                  throw new Error('invalid tree size');
               }
            }
         case 'house':
            return { width: 56, height: 58 };
         case 'wheat':
            switch (boardItem.size) {
               case 'small':
                  return { width: 65, height: 39 };
               case 'big':
                  return { width: 65, height: 47 };
               default:
                  throw new Error('invalid tree size');
            }
         default:
            throw new Error('Topper missing from getCustomTopperSizes');
      }
   }

   throw new Error('Invalid boardItem');
};
