/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { CartesianCoordinates } from '../types/positionTypes';

export const standardBaseCss = (cartProps: CartesianCoordinates) => css`
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
`