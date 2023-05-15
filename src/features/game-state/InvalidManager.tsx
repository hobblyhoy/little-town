import { useEffect } from 'react';
import {
   dictionaryToArray,
   isNotGrass,
   isRock,
   structuresOnly,
   toIsometricCoords,
   isNotTree,
   isNotWheat,
   isNotWindmill,
   isNotRoadAdjacent,
} from '../../app/utils';
import { IIsometricCoordinates } from '../../types/BoardTypes';
import { resetDimTiles, dimTiles, selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';

// Responsible for determining which tiles are valid for all of our possible actions to take
function InvalidManager() {
   const dispatch = useAppDispatch();
   const selectedItem = useAppSelector(selectSelectedItem);
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);

   useEffect(() => {
      dispatch(resetDimTiles());
      if (!selectedItem) return;

      let invalidTiles: IIsometricCoordinates[] = [];
      let invalidToppers: IIsometricCoordinates[] = [];
      switch (selectedItem) {
         case 'remove':
            invalidToppers = dictionaryToArray(boardToppers).filter(isRock).map(toIsometricCoords);
            break;

         case 'rotate':
            invalidToppers = dictionaryToArray(boardToppers)
               .filter(structuresOnly)
               .map(toIsometricCoords);
            break;

         case 'tree':
            invalidTiles = dictionaryToArray(boardTiles).filter(isNotGrass).map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers)
               .filter(isNotTree)
               .map(toIsometricCoords);
            break;

         case 'road':
            invalidToppers = dictionaryToArray(boardToppers).map(toIsometricCoords);
            break;

         case 'house':
            invalidTiles = dictionaryToArray(boardTiles)
               .filter(x => isNotGrass(x) || isNotRoadAdjacent({ ...x }, boardTiles))
               .map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers).map(toIsometricCoords);
            break;

         case 'wheat':
            invalidTiles = dictionaryToArray(boardTiles).filter(isNotGrass).map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers)
               .filter(isNotWheat)
               .map(toIsometricCoords);
            break;

         case 'windmill':
            invalidTiles = dictionaryToArray(boardTiles)
               .filter(x => isNotGrass(x) || isNotRoadAdjacent({ ...x }, boardTiles))
               .map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers)
               .filter(isNotWindmill)
               .map(toIsometricCoords);
            break;
         default:
            throw new Error('Unimplemented item in InvalidManager');
      }

      dispatch(dimTiles([...invalidTiles, ...invalidToppers]));
   }, [selectedItem]);
   return <></>;
}
export default InvalidManager;
