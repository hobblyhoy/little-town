import { IBoardStateBase, IBoardStateTile } from "../features/game-state/GameStateSlice";

// Guard functions
export const isIBoardStateTile = (obj: IBoardStateBase): obj is IBoardStateTile => {
   return 'tileType' in obj;
};
