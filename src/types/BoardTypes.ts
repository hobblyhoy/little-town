// Positioning
export interface IIsometricCoordinates {
   isoX: number;
   isoY: number;
   isoZ: number;
}

export interface IIsometricCoordinatesWithOffset extends IIsometricCoordinates {
   offsetX?: number;
   offsetY?: number;
}

export interface IIsometricCoordinatesWithType extends IIsometricCoordinatesWithOffset {
   type: 'tile' | 'topper';
}

export interface ISizeable {
   topperSize: 'big' | 'small'
}

export interface ICartesianCoordinates {
   cartX: number;
   cartY: number;
}

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
   tileType: 'grass' | 'dirt';
}

export interface IBoardStateTopperSetter extends IBoardStateBaseSetter, ISizeable {
   topperType: 'tree' | 'rock';
}

// Board Items (For use after the GameStateSlice has decorated with these fields)
export interface IBoardStateBase extends IIsometricCoordinates {
   key: string;
   type: 'tile' | 'topper';
}

export interface IBoardStateTile extends IBoardStateBase {
   tileType: 'grass' | 'dirt';
   cellUpperLeft: string | null;
   cellUpperRight: string | null;
   cellLowerLeft: string | null;
   cellLowerRight: string | null;
   cellAbove: string | null;
}

export interface IBoardStateTopper extends IBoardStateBase, ISizeable {
   topperType: 'tree' | 'rock';
   cellBelow: string | null;
}