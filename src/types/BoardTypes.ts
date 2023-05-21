// Positioning
export interface IIsometricCoordinates {
   isoX: number;
   isoY: number;
   isoZ: number;
}

export interface ICartesianCoordinates {
   cartX: number;
   cartY: number;
}

export interface ICartesianOffset {
   offsetX: number;
   offsetY: number;
}

// Sizing
export type TopperSize = 'big' | 'small' | 'tiny';

export interface ISizeable {
   size?: TopperSize;
}

export interface IPixelSize {
   width: number;
   height: number;
}

// Direction
export interface IMultiDirectional {
   topLeft: boolean;
   topRight: boolean;
   bottomLeft: boolean;
   bottomRight: boolean;
}
export type Directional = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export interface IDirectional {
   direction?: Directional;
}
export type CartesianDirectional = 'top' | 'left' | 'right' | 'bottom';

// Colors
export type Colors = '#4D9BE6' | '#E64D4D' | '#8B4DE6' | '#E9DE36'; // blue, red, purple, yellow
export interface IColorable {
   color?: Colors;
}

// Variations
export type TreeVariations = 'circular' | 'christmas';
export interface IVariations {
   variation?: TreeVariations;
}

// Types
export type TopperType = 'tree' | 'house' | 'wheat' | 'windmill' | 'rock';
export type TileType = 'grass' | 'road';
//export type TreeVariation = 'circular' | 'christmas';

// Board Item setters (For use when setting or updating a board item)
export interface IIsometricCoordinatesSetter {
   isoX: number;
   isoY: number;
   isoZ?: never;
}

export interface IBoardStateBaseSetter extends IIsometricCoordinatesSetter {
   key?: never;
   type?: never;
   cellUpperLeft?: never;
   cellUpperRight?: never;
   cellLowerLeft?: never;
   cellLowerRight?: never;
   cellAbove?: never;
   cellBelow?: never;
}

export interface IBoardStateTileSetter extends IBoardStateBaseSetter {
   tileType: TileType;
}

export interface IBoardStateTopperSetter extends IBoardStateBaseSetter, ISizeable, IDirectional {
   topperType: TopperType;
   isInitial?: boolean;
}

// Board Items (For use after the GameStateSlice has decorated with these fields)
export interface IBoardStateBase extends IIsometricCoordinates {
   key: string;
   type: 'tile' | 'topper';
   isInvalid: boolean;
}

export interface IBoardStateTile extends IBoardStateBase {
   tileType: TileType;
   cellUpperLeft: string | null;
   cellUpperRight: string | null;
   cellLowerLeft: string | null;
   cellLowerRight: string | null;
   cellAbove: string | null;
}

export interface IBoardStateTopper
   extends IBoardStateBase,
      ISizeable,
      IDirectional,
      IColorable,
      IVariations {
   topperType: TopperType;
   cellBelow: string | null;
}

// Topper and Tile Rendered Component Props
export interface IBoardTopperProps {
   boardTopper: IBoardStateTopper;
   cartCoords: ICartesianCoordinates;
   pixelSize: IPixelSize;
}

export interface IBoardTileProps {
   boardTile: IBoardStateTile;
   cartCoords: ICartesianCoordinates;
   pixelSize: IPixelSize;
}
