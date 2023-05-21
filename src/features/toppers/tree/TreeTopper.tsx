/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBoardTopperProps } from '../../../types/BoardTypes';
import Tree_Seed_Topper from './Tree_Seed_Topper';
import Tree_Small_Circular_Topper from './Tree_Small_Circular_Topper';
import Tree_Big_Circular_Topper from './Tree_Big_Circular_Topper';
import Tree_Small_Xmas_Topper from './Tree_Small_Xmas_Topper';
import Tree_Big_Xmas_Topper from './Tree_Big_Xmas_Topper';

function TreeTopper(props: IBoardTopperProps) {
   //console.log('tree topper rerender');

   switch (props.boardTopper.size) {
      case 'tiny':
         return <Tree_Seed_Topper {...props} />;
      case 'small':
         switch (props.boardTopper.variation) {
            case 'circular':
               return <Tree_Small_Circular_Topper {...props} />
            case 'christmas':
               return <Tree_Small_Xmas_Topper {...props} />
            default:
               throw new Error('unimplemented variation in TreeTopper');
         }
      case 'big':
         switch (props.boardTopper.variation) {
            case 'circular':
               return <Tree_Big_Circular_Topper {...props} />
            case 'christmas':
               return <Tree_Big_Xmas_Topper {...props} />
            default:
               throw new Error('unimplemented variation in TreeTopper');
         }
      default:
         throw new Error('unimplemented size in TreeTopper');
   }
}

export default TreeTopper;
