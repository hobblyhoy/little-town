export interface IsometricCoordinates {
   isoX: number;
   isoY: number;
   isoZ: number;
   offsetX?: number;
   offsetY?: number;
}

export interface IsometricCoordinatesWithType extends IsometricCoordinates {
   type: 'tile' | 'topper';
}

export interface Sizeable {
   topperSize: 'small' | 'big'
}

export interface CartesianCoordinates {
   cartX: number;
   cartY: number;
}