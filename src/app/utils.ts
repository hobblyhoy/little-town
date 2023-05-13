import {
   IBoardStateBase,
   IBoardStateTile,
   IBoardStateTopper,
   IIsometricCoordinates,
   IIsometricCoordinatesSetter,
} from '../types/BoardTypes';

//// Guard functions \\\\
export const isBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};

export const isBoardStateTopper = (obj: IBoardStateBase): obj is IBoardStateTopper => {
   return 'topperType' in obj;
};

//// Game Renderer Utils \\\\
// Take a dictionary of elements to render and produce a sorted array with them rendering back to front
export const sortIntoRenderOrder = <T extends IIsometricCoordinates>(inputDict: {
   [key: string]: T;
}) => {
   return Object.keys(inputDict)
      .map(key => inputDict[key])
      .sort((a, b) => {
         if (a.isoY !== b.isoY) {
            return a.isoY - b.isoY;
         } else {
            return a.isoX - b.isoX;
         }
      });
};

//// Game State Utils \\\\
export const keysForRelativeItem = (
   origin: IIsometricCoordinates
): {
   upperLeft: string;
   upperRight: string;
   lowerLeft: string;
   lowerRight: string;
   above: string;
   below: string;
} => {
   return {
      upperLeft: `${origin.isoX - 1}-${origin.isoY}-${origin.isoZ}`,
      upperRight: `${origin.isoX}-${origin.isoY - 1}-${origin.isoZ}`,
      lowerLeft: `${origin.isoX}-${origin.isoY + 1}-${origin.isoZ}`,
      lowerRight: `${origin.isoX + 1}-${origin.isoY}-${origin.isoZ}`,
      above: `${origin.isoX}-${origin.isoY}-${origin.isoZ + 1}`,
      below: `${origin.isoX}-${origin.isoY}-${origin.isoZ - 1}`,
   };
};

export const updateBoardTileWithCellNeighborData = (
   tiles: { [key: string]: IBoardStateTile },
   boardItemToUpdate: IBoardStateTile
) => {
   let relativeKeys = keysForRelativeItem(boardItemToUpdate);
   boardItemToUpdate.cellUpperLeft = tiles[relativeKeys.upperLeft]
      ? tiles[relativeKeys.upperLeft].key
      : null;
   boardItemToUpdate.cellUpperRight = tiles[relativeKeys.upperRight]
      ? tiles[relativeKeys.upperRight].key
      : null;
   boardItemToUpdate.cellLowerLeft = tiles[relativeKeys.lowerLeft]
      ? tiles[relativeKeys.lowerLeft].key
      : null;
   boardItemToUpdate.cellLowerRight = tiles[relativeKeys.lowerRight]
      ? tiles[relativeKeys.lowerRight].key
      : null;
};

export const buildGrassTile = (
   isoCoords: IIsometricCoordinatesSetter,
   key: string
): IBoardStateTile => {
   return {
      isoX: isoCoords.isoX,
      isoY: isoCoords.isoY,
      isoZ: 0,
      type: 'tile',
      tileType: 'grass',
      key,
      cellUpperLeft: null,
      cellUpperRight: null,
      cellLowerLeft: null,
      cellLowerRight: null,
      cellAbove: null,
      isInvalid: false,
   };
};

//// Helpers \\\\
export const dictionaryToArray = <T>(obj: Record<string, T>): T[] => Object.values(obj);
export const generateInternalKey = (obj: IIsometricCoordinates): string => {
   return `${obj.isoX}-${obj.isoY}-${obj.isoZ}`;
};

//// Filters \\\\
export const grassOnly = (x: IBoardStateTile) => x.tileType !== 'grass';
export const treesOnly = (x: IBoardStateTopper) => x.topperType !== 'tree';
export const wheatOnly = (x: IBoardStateTopper) => x.topperType !== 'wheat';
export const housesOnly = (x: IBoardStateTopper) => x.topperType !== 'house';

//// Maps \\\\
export const toIsometricCoords = (x: IIsometricCoordinates) => ({
   isoX: x.isoX,
   isoY: x.isoY,
   isoZ: x.isoZ,
});
