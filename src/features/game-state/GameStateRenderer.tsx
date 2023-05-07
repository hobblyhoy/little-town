import { useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { IBoardStateTile, IBoardStateTopper, selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect } from 'react';
import { isIBoardStateTile } from '../../app/utils';
import GrassTile from '../tiles/GrassTile';
import TreeTopper from '../toppers/TreeTopper';
import { IsometricCoordinates } from '../../types/positionTypes';

// Take our dictionary of elements to render and produce a sorted array with them rendering back to front
const sortIntoRenderOrder = <T extends IsometricCoordinates>(inputDict: { [key: string]: T }) => {
   const objectsArray = Object.keys(inputDict).map(key => inputDict[key]);
   return objectsArray.sort((a, b) => {
      if (a.isoY !== b.isoY) {
         return a.isoY - b.isoY;
      } else {
         return a.isoX - b.isoX;
      }
   });
};

function GameStateRenderer() {
   //grab the current state from the slice, render it out
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);

   useEffect(() => {
      console.log({ boardToppers });
   }, [boardToppers]);

   return (
      <div>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            return <GrassTile {...item} />;
         })}

         {sortIntoRenderOrder<IBoardStateTopper>(boardToppers).map(item => {
            return <TreeTopper {...item} />;
         })}
      </div>
   );
}

export default GameStateRenderer;
