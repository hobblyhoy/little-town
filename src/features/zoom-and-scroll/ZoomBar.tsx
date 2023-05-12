/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useAppDispatch } from '../../app/hooks';
import { zoomIn, zoomOut } from './ZoomScrollSlice';

function ZoomBar() {
   const baseCss = css`
      top: 0;
      right: 0;
      width: 200px;
      cursor: pointer;
   `;

   const dispatch = useAppDispatch();

   return (
      <div css={baseCss}>
         <div onClick={() => dispatch(zoomIn())}>Zoom In</div>
         <div onClick={() => dispatch(zoomOut())}>Zoom Out</div>
      </div>
   )
}

export default ZoomBar;