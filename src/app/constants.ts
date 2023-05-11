/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ICartesianCoordinates, TileType, TopperType } from '../types/BoardTypes';

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

export const boardSize = 4;

export const boardItemCost: Record<TopperType | TileType, number> = {
   grass: 0,
   road: 2,
   tree: 1,
   house: 10,
   wheat: 5,
};
