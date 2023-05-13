import { useEffect } from 'react';
import { dictionaryToArray, grassOnly, housesOnly, toIsometricCoords, treesOnly, wheatOnly } from '../../app/utils';
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
            break;

         case 'rotate':
            invalidToppers = dictionaryToArray(boardToppers).filter(housesOnly).map(toIsometricCoords);
            break;

         case 'tree':
            invalidTiles = dictionaryToArray(boardTiles).filter(grassOnly).map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers)
               .filter(treesOnly)
               .map(toIsometricCoords);
            break;

         case 'road':
            invalidToppers = dictionaryToArray(boardToppers).map(toIsometricCoords);
            break;

         case 'house':
            invalidTiles = dictionaryToArray(boardTiles).filter(grassOnly).map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers).map(toIsometricCoords);
            break;

         case 'wheat':
            invalidTiles = dictionaryToArray(boardTiles).filter(grassOnly).map(toIsometricCoords);
            invalidToppers = dictionaryToArray(boardToppers).filter(wheatOnly).map(toIsometricCoords);
            break;
            
         default:
            throw new Error('Unimplemented item in InvalidManager');
      }

      dispatch(dimTiles([...invalidTiles, ...invalidToppers]));
   }, [selectedItem]);
   return <></>;
}
export default InvalidManager;
