/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ICartesianCoordinates, IPixelSize, TileType, TopperType } from '../types/BoardTypes';
import { IBarElement, SelectableItem } from '../types/BarTypes';

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

export const growthTime = 30 * 1000;

export const boardSize = 15;

export const boardItemCost: Record<TopperType | TileType, number> = {
   grass: 0,
   road: 1,
   tree: 1,
   house: 4,
   wheat: 4,
   windmill: 4,
   rock: 0,
};

export const selectionBarUiNameMap: { [key in SelectableItem]: string } = {
   tree: 'Seed',
   house: 'House',
   wheat: 'Wheat',
   windmill: 'Windmill',
   road: 'Road',
   remove: 'Remove',
   rotate: 'Rotate',
   harvest: 'Harvest'
}

