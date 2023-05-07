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

// Board Items
export interface IBoardStateBase extends IIsometricCoordinates {
   key?: string;
   type: 'tile' | 'topper';
}

export interface IBoardStateTile extends IBoardStateBase {
   tileType: 'grass' | 'dirt';
}

export interface IBoardStateTopper extends IBoardStateBase, ISizeable {
   topperType: 'tree' | 'rock';
}