import { IBoardStateBase, IBoardStateTile, IIsometricCoordinates } from "../types/BoardTypes";

// Guard functions
// didnt end up using this but I might in the future so leaving for now
export const isIBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};

// Helpers
export const generateInternalKey = (obj: IIsometricCoordinates): string => {
   return `${obj.isoX}-${obj.isoY}-${obj.isoZ}`;
}