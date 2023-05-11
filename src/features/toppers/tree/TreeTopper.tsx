/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ICartesianCoordinates, ISizeable } from '../../../types/BoardTypes';
import Tree_Seed_Topper from './Tree_Seed_Topper';
import Tree_Small_Topper from './Tree_Small_Topper';
import Tree_Big_Topper from './Tree_Big_Topper';


interface IProps extends ICartesianCoordinates, ISizeable {}
function TreeTopper({ size: topperSize, ...cartProps }: IProps) {
   switch (topperSize) {
      case 'init':
         return <Tree_Seed_Topper {...cartProps} />
      case 'small':
         return <Tree_Small_Topper {...cartProps} />
      case 'big':
         return <Tree_Big_Topper {...cartProps} />
      default:
         throw new Error('unimplemented size in TreeTopper');
   }
}

export default TreeTopper;




