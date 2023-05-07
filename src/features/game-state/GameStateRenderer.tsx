import { useAppSelector } from '../../app/hooks';
import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect } from 'react';
import GrassTile from '../tiles/GrassTile';
import TreeTopper from '../toppers/TreeTopper';
import { IBoardStateTile, IBoardStateTopper, IIsometricCoordinates } from '../../types/BoardTypes';

// Take our dictionary of elements to render and produce a sorted array with them rendering back to front
const sortIntoRenderOrder = <T extends IIsometricCoordinates>(inputDict: { [key: string]: T }) => {
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
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);

   useEffect(() => {
      console.log({ boardTiles });
   }, [boardTiles]);
   useEffect(() => {
      console.log({ boardToppers });
   }, [boardToppers]);

   const handleClick = (e: MouseEvent) => {

   }

   return (
      <div>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            // TODO maybe a wrapper for tiles for grabbing onclick instead of this..
            return <div onClick={handleClick} key={item.key}><GrassTile {...item} /></div>;
         })}

         {sortIntoRenderOrder<IBoardStateTopper>(boardToppers).map(item => {
            return <TreeTopper {...item} />;
         })}
      </div>
   );
}

export default GameStateRenderer;
