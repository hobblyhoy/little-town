import { IBoardStateBase, IBoardStateTile } from "../features/game-state/GameStateSlice";
import { IsometricCoordinates } from "../types/positionTypes";

// Guard functions
export const isIBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};

export const generateInternalKey = (obj: IsometricCoordinates): string => {
   return `${obj.isoX}-${obj.isoY}-${obj.isoZ}`;
}