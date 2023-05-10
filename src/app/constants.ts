/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ICartesianCoordinates } from '../types/BoardTypes';

export const standardBaseCss = (cartProps: ICartesianCoordinates) => css`
   position: fixed;
   top: ${cartProps.cartY}px;
   left: ${cartProps.cartX}px;
   width: 95px;
   height: 97px;
   pointer-events: none;
`;

export const customDimensions = (width: number, height: number) => css`
   width: ${width}px;
   height: ${height}px;
`;
export const tileGCss = css`
   pointer-events: visiblePainted;
`;

export const boardSize = 3;
