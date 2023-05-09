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
export interface ISizeable {
   topperSize: 'big' | 'small' | 'init';
}

export type TopperType = 'tree' | 'rock';
export type TileType = 'grass' | 'road';

// Board Item setters (For use when setting or updating a board item)
export interface IBoardStateBaseSetter extends IIsometricCoordinates {
   key?: never;
   type: 'tile' | 'topper';
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

export interface IBoardStateTopperSetter extends IBoardStateBaseSetter, ISizeable {
   topperType: TopperType;
}

// Board Items (For use after the GameStateSlice has decorated with these fields)
export interface IBoardStateBase extends IIsometricCoordinates {
   key: string;
   type: 'tile' | 'topper';
}

export interface IBoardStateTile extends IBoardStateBase {
   tileType: TileType;
   cellUpperLeft: string | null;
   cellUpperRight: string | null;
   cellLowerLeft: string | null;
   cellLowerRight: string | null;
   cellAbove: string | null;
}

export interface IBoardStateTopper extends IBoardStateBase, ISizeable {
   topperType: TopperType;
   cellBelow: string | null;
}
