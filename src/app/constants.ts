/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {
   Colors,
   ICartesianCoordinates,
   IPixelSize,
   TileType,
   TopperType,
   TreeVariations,
} from '../types/BoardTypes';
import { SelectableItem } from '../types/BarTypes';

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

export const buildColorCss = (color: Colors) => css`
   fill: ${color};
`;

export const growthTime = 60 * 1000;

export const boardSize = 16;

export const boardItemCost: Record<TopperType | TileType, number> = {
   grass: 0,
   road: 1,
   tree: 1,
   house: 10,
   wheat: 3,
   windmill: 10,
   rock: 0,
};

export const boardUpgradeCost: Record<TopperType, number> = {
   house: 20,
   tree: 0,
   wheat: 0,
   windmill: 0,
   rock: 0,
};

export const boardProfit: Record<TopperType, number> = {
   tree: 2,
   house: 1,
   wheat: 4,
   windmill: 0,
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
   harvest: 'Harvest',
   upgrade: 'Upgrade',
};

export const colors: Colors[] = ['#4D9BE6', '#E64D4D', '#8B4DE6', '#E9DE36'];
export const treeVariations: TreeVariations[] = ['christmas', 'circular'];
