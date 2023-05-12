/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { keyframes } from '@emotion/react';
import { IBoardStateTopper } from '../../types/BoardTypes';
import { getBoardItemPosition } from '../position-and-size/Positioner';
import { getBoardItemSize } from '../position-and-size/Sizer';
import HouseTopper from '../toppers/house/HouseTopper';
import TreeTopper from '../toppers/tree/TreeTopper';
import WheatTopper from '../toppers/wheat/WheatTopper';
import { useAppSelector } from '../../app/hooks';
import { selectZoom } from '../zoom-and-scroll/ZoomScrollSlice';

function TopperRenderer(boardTopper: IBoardStateTopper) {
   const fadeIn = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
   `;

   const fadeInCss = css`
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-in-out forwards;
   `;

   return (
      <div css={fadeInCss}>
         <TopperRendererInner {...boardTopper} />
      </div>
   );
}

export default TopperRenderer;

function TopperRendererInner(boardTopper: IBoardStateTopper) {
   const zoom = useAppSelector(selectZoom);
   const cartCoords = getBoardItemPosition(boardTopper, zoom);
   const pixelSize = getBoardItemSize(boardTopper, zoom);

   switch (boardTopper.topperType) {
      case 'tree':
         return (
            <TreeTopper boardTopper={boardTopper} cartCoords={cartCoords} pixelSize={pixelSize} />
         );
      case 'house':
         return (
            <HouseTopper
               direction="bottomRight"
               boardTopper={boardTopper}
               cartCoords={cartCoords}
               pixelSize={pixelSize}
            />
         );
      case 'wheat':
         return (
            <WheatTopper boardTopper={boardTopper} cartCoords={cartCoords} pixelSize={pixelSize} />
         );
      default:
         throw new Error('Invalid topperType in TopperRenderer: ' + boardTopper.topperType);
   }
}
