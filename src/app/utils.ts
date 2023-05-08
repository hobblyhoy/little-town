import { IBoardStateBase, IBoardStateTile, IIsometricCoordinates } from '../types/BoardTypes';

// Guard functions
// didnt end up using this but I might in the future so leaving for now
export const isIBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};

// Helpers
export const generateInternalKey = (obj: IIsometricCoordinates): string => {
   return `${obj.isoX}-${obj.isoY}-${obj.isoZ}`;
};

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

export const keysForRelativeItem = (
   origin: IIsometricCoordinates,
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
      below: `${origin.isoX}-${origin.isoY}-${origin.isoZ - 1}`
   }
};
