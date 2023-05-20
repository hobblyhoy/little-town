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
export const getRandomInclusive = (start: number, end: number) => {
   return Math.floor(Math.random() * (end - start + 1)) + start;
};

//// Filters - Tiles \\\\
export const hasATopper = (x: IBoardStateTile) => x.cellAbove !== null;
export const doesntHaveATopper = (x: IBoardStateTile) => x.cellAbove === null;
export const isRoad = (x: IBoardStateTile) => x.tileType === 'road';
export const isNotRoad = (x: IBoardStateTile) => x.tileType !== 'road';
export const isRoadAdjacent = (
   tile: IBoardStateTile,
   boardTiles: { [key: string]: IBoardStateTile }
) => {
   return (
      (tile.cellUpperLeft && boardTiles[tile.cellUpperLeft]?.tileType === 'road') ||
      (tile.cellUpperRight && boardTiles[tile.cellUpperRight]?.tileType === 'road') ||
      (tile.cellLowerLeft && boardTiles[tile.cellLowerLeft]?.tileType === 'road') ||
      (tile.cellLowerRight && boardTiles[tile.cellLowerRight]?.tileType === 'road')
   );
};

//// Filters - Toppers \\\\
export const isStructure = (x: IBoardStateTopper) =>
   x.topperType === 'house' || x.topperType === 'windmill';
export const isHarvestable = (x: IBoardStateTopper) =>
   x.topperType === 'wheat' || x.topperType === 'tree';
export const isNotRock = (x: IBoardStateTopper) => x.topperType !== 'rock';
export const isBig = (x: IBoardStateTopper) => x.size === 'big';
export const isWindmill = (x: IBoardStateTopper) => x.topperType === 'windmill';
export const isWindmillAdjacent = (
   tile: IBoardStateTile,
   boardToppers: { [key: string]: IBoardStateTopper }
) => {
   // A little more complex than the roads, we want to check any of the squares in
   // the 3x3 grid around this tile for a windmill
   for (let isoX = tile.isoX - 1; isoX < tile.isoX + 2; isoX++) {
      for (let isoY = tile.isoY - 1; isoY < tile.isoY + 2; isoY++) {
         let key = generateInternalKey({ isoX, isoY, isoZ: 1 });
         if (!boardToppers[key]) continue;
         if (isWindmill(boardToppers[key])) return true;
      }
   }
   return false;
};

//// Maps \\\\
export const toIsometricCoords = (x: IIsometricCoordinates) => ({
   isoX: x.isoX,
   isoY: x.isoY,
   isoZ: x.isoZ,
});
