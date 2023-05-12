/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ICartesianCoordinates, IPixelSize, TileType, TopperType } from '../types/BoardTypes';

export const standardBaseCss = () => css`
   position: fixed;
   pointer-events: none;
`;

export const buildPositionCss = (cartProps: ICartesianCoordinates) => css`
   top: ${cartProps.cartY}px;
   left: ${cartProps.cartX}px;
`;

export const buildSizeCss = (pixelSize: IPixelSize) => css`
   width: ${pixelSize.width}px;
   height: ${pixelSize.height}px;
`;

export const tileGCss = css`
   pointer-events: visiblePainted;
`;

export const growthTime = 5000;

export const boardSize = 10;

export const boardItemCost: Record<TopperType | TileType, number> = {
   grass: 0,
   road: 2,
   tree: 1,
   house: 10,
   wheat: 5,
};


export const selectionBarHeight = 200;