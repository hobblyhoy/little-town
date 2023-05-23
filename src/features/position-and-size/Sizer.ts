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
               case 'tiny':
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
            switch (boardItem.size) {
               case 'small':
                  return { width: 56, height: 58 };
               case 'big':
                  return { width: 56, height: 76 };
               default: {
                  throw new Error('invalid house size');
               }
            }
         case 'wheat':
            switch (boardItem.size) {
               case 'small':
                  return { width: 65, height: 39 };
               case 'big':
                  return { width: 65, height: 47 };
               default:
                  throw new Error('invalid tree size');
            }
         case 'windmill':
            return { width: 62, height: 91 };

         case 'rock':
            switch (boardItem.size) {
               case 'tiny':
                  return { width: 44, height: 32 };
               case 'small':
                  return { width: 43, height: 37 };
               case 'big':
                  return { width: 53, height: 38 };
               default: {
                  throw new Error('invalid tree size');
               }
            }
         default:
            throw new Error('Topper missing from getBoardItemSizeBase');
      }
   }

   throw new Error('Invalid boardItem');
};
