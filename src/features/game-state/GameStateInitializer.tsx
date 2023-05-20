import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { initializeBoardTiles, addTopper } from './GameStateSlice';
import { IIsometricCoordinatesSetter, TopperSize } from '../../types/BoardTypes';
import { boardSize } from '../../app/constants';
import { getRandomInclusive } from '../../app/utils';

// TODO this could use with a tidy-up. Extract out the initializer for both types into their own functions
// and have this just being responsible for calling both of them
// or the other way around and create an intializeBoardToppers in the GameStateSlice (though that makes complexity with the
// whole addTopper situation)
function GameStateInitializer() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initializeBoardTiles());

      // Generate Toppers
      const minTrees = 5;
      const maxTrees = 10;
      let treeCount = getRandomInclusive(minTrees, maxTrees);

      const minRocks = 8;
      const maxRocks = 15;
      let rockCount = getRandomInclusive(minRocks, maxRocks);

      // Build a list of random unique coordinates on the board
      let coordsList: IIsometricCoordinatesSetter[] = [];
      while (coordsList.length < treeCount + rockCount) {
         let randX = getRandomInclusive(0, boardSize - 1);
         let randY = getRandomInclusive(0, boardSize - 1);

         if (!coordsList.some(x => x.isoX === randX && x.isoY === randY)) {
            coordsList.push({ isoX: randX, isoY: randY });
         }
      }

      let sizes: TopperSize[] = ['big', 'small', 'tiny'];

      let coordsListIndex = 0;
      for (let i = 0; i < treeCount; i++) {
         let isoCoords = coordsList[coordsListIndex];
         let randomSize = sizes[getRandomInclusive(0, sizes.length - 1)];
         // Settimeout to add them to the event queue so react can know about them for the growth timer functions
         setTimeout(() => {
            dispatch(
               addTopper({
                  isoX: isoCoords.isoX,
                  isoY: isoCoords.isoY,
                  topperType: 'tree',
                  size: randomSize,
                  isInitial: true,
               })
            );
         }, 0);

         coordsListIndex++;
      }

      for (let i = 0; i < rockCount; i++) {
         let isoCoords = coordsList[coordsListIndex];
         let randomSize = sizes[getRandomInclusive(0, sizes.length - 1)];
         dispatch(
            addTopper({
               isoX: isoCoords.isoX,
               isoY: isoCoords.isoY,
               topperType: 'rock',
               size: randomSize,
               isInitial: true,
            })
         );

         coordsListIndex++;
      }
   }, []);

   return <></>;
}

export default GameStateInitializer;
