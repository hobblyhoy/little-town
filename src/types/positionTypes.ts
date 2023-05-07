export interface IsometricCoordinates {
   isoX: number;
   isoY: number;
   isoZ: number;
}

export interface IsometricCoordinatesWithOffset extends IsometricCoordinates {
   offsetX?: number;
   offsetY?: number;
}

export interface IsometricCoordinatesWithType extends IsometricCoordinatesWithOffset {
   type: 'tile' | 'topper';
}

export interface Sizeable {
   topperSize: 'small' | 'big'
}

export interface CartesianCoordinates {
   cartX: number;
   cartY: number;
}