import { useEffect } from 'react';
import {
   dictionaryToArray,
   isStructure,
   isRoadAdjacent,
   isNotRock,
   hasATopper,
   doesntHaveATopper,
   isNotRoad,
   isBig,
   isHarvestable,
} from '../../app/utils';
import { IBoardStateTile, IBoardStateTopper } from '../../types/BoardTypes';
import {
   resetValidBoardItems,
   setValidBoardItems,
   selectBoardTiles,
   selectBoardToppers,
} from './GameStateSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';

// Responsible for determining which tiles are valid for all of our possible actions to take
function InvalidManager() {
   const dispatch = useAppDispatch();
   const selectedItem = useAppSelector(selectSelectedItem);
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);

   useEffect(() => {
      dispatch(resetValidBoardItems());
      if (!selectedItem) return;

      let validTiles: IBoardStateTile[] = dictionaryToArray(boardTiles);
      let validToppers: IBoardStateTopper[] = dictionaryToArray(boardToppers);
      switch (selectedItem) {
         case 'remove':
            validTiles = validTiles.filter(hasATopper);
            validToppers = validToppers.filter(isNotRock);
            break;

         case 'rotate':
            validTiles = validTiles.filter(hasATopper);
            validToppers = validToppers.filter(isStructure);
            break;

         case 'tree':
            validTiles = validTiles.filter(doesntHaveATopper).filter(isNotRoad);
            break;

         case 'wheat':
            validTiles = validTiles.filter(doesntHaveATopper).filter(isNotRoad);
            break;

         case 'road':
            validTiles = validTiles.filter(doesntHaveATopper);
            break;

         case 'house':
            validTiles = validTiles
               .filter(doesntHaveATopper)
               .filter(isNotRoad)
               .filter(x => isRoadAdjacent(x, boardTiles));
            break;

         case 'windmill':
            validTiles = validTiles
               .filter(doesntHaveATopper)
               .filter(isNotRoad)
               .filter(x => isRoadAdjacent(x, boardTiles));
            break;

         case 'harvest':
            validTiles = validTiles.filter(hasATopper);
            validToppers = validToppers.filter(isHarvestable).filter(isBig);
            break;

         default:
            throw new Error('Unimplemented item in InvalidManager');
      }

      dispatch(setValidBoardItems({ validTiles, validToppers }));
   }, [selectedItem]);
   return <></>;
}
export default InvalidManager;
