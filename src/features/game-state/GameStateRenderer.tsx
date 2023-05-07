import { useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect } from 'react';
import { isIBoardStateTile } from '../../app/utils';
import GrassTile from '../tiles/GrassTile';
import TreeTopper from '../toppers/TreeTopper';

function GameStateRenderer() {
   //grab the current state from the slice, render it out
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);

   useEffect(() => {
      console.log({ boardToppers });
   }, [boardToppers]);

   return (
      <div>
         {boardTiles.map(item => {
            return <GrassTile {...item} key={`${item.isoX}-${item.isoY}-${item.isoZ}`} />;
         })}
         
         {boardToppers.map(item => {
            return <TreeTopper {...item} key={`${item.isoX}-${item.isoY}-${item.isoZ}`} />
         })}
      </div>
   );
}

export default GameStateRenderer;
