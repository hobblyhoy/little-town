/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBoardTopperProps } from '../../../types/BoardTypes';
import Tree_Seed_Topper from './Tree_Seed_Topper';
import Tree_Small_Topper from './Tree_Small_Topper';
import Tree_Big_Topper from './Tree_Big_Topper';

function TreeTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.size) {
      case 'tiny':
         return <Tree_Seed_Topper {...props} />;
      case 'small':
         return <Tree_Small_Topper {...props} />;
      case 'big':
         return <Tree_Big_Topper {...props} />;
      default:
         throw new Error('unimplemented size in TreeTopper');
   }
}

export default TreeTopper;
