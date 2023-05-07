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











// // For manual testing of my sorting function
// const tiles: { [key: string]: IBoardStateTile } = {
//    '2-0-0': { isoX: 2, isoY: 0, isoZ: 0, type: 'tile', tileType: 'grass', key: '2-0-0' },
//    '2-2-0': { isoX: 2, isoY: 2, isoZ: 0, type: 'tile', tileType: 'grass', key: '2-2-0' },
//    '1-0-0': { isoX: 1, isoY: 0, isoZ: 0, type: 'tile', tileType: 'grass', key: '1-0-0' },
//    '0-0-0': { isoX: 0, isoY: 0, isoZ: 0, type: 'tile', tileType: 'grass', key: '0-0-0' },
//    '2-1-0': { isoX: 2, isoY: 1, isoZ: 0, type: 'tile', tileType: 'grass', key: '2-1-0' },
//    '0-2-0': { isoX: 0, isoY: 2, isoZ: 0, type: 'tile', tileType: 'grass', key: '0-2-0' },
//    '0-1-0': { isoX: 0, isoY: 1, isoZ: 0, type: 'tile', tileType: 'grass', key: '0-1-0' },
//    '1-1-0': { isoX: 1, isoY: 1, isoZ: 0, type: 'tile', tileType: 'grass', key: '1-1-0' },
//    '1-2-0': { isoX: 1, isoY: 2, isoZ: 0, type: 'tile', tileType: 'grass', key: '1-2-0' },
// };