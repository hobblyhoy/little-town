import { IBoardStateBase, IBoardStateTile, IIsometricCoordinates } from "../types/BoardTypes";

// Guard functions
export const isIBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};

export const generateInternalKey = (obj: IIsometricCoordinates): string => {
   return `${obj.isoX}-${obj.isoY}-${obj.isoZ}`;
}