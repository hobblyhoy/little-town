import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect, MouseEvent } from 'react';
import GrassTile from '../tiles/GrassTile';
import TreeTopper from '../toppers/TreeTopper';
import { IBoardStateTile, IBoardStateTopper, IIsometricCoordinates } from '../../types/BoardTypes';
import { sortIntoRenderOrder } from '../../app/utils';
import { setMouseDownOn, setMouseMoveOn } from '../click-and-drag/ClickAndDragSlice';
import { positionCalc } from '../position/Positioner';
import RoadAllTile from '../tiles/road/RoadAllTile';
import RoadNoneTile from '../tiles/road/RoadNoneTile';
import TileRenderer from './TileRenderer';

function GameStateRenderer() {
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);
   const dispatch = useAppDispatch();

   useEffect(() => {
      console.log({ boardTiles });
   }, [boardTiles]);
   useEffect(() => {
      console.log({ boardToppers });
   }, [boardToppers]);

   const handleMouseDown = (e: MouseEvent<HTMLDivElement>, item: IBoardStateTile) => {
      dispatch(setMouseDownOn(item));
   };

   const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
      dispatch(setMouseDownOn(null));
   };

   const handleMouseMove = (e: MouseEvent<HTMLDivElement>, item: IBoardStateTile) => {
      dispatch(setMouseMoveOn(item));
   };

   return (
      <div>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            // TODO it is obviously much easier to handle the click events here...
            // but if we want to support directional placing of houses we cant do it (womp womp)
            // honestly though I think we might leave direction housing for a V2 since thats going to add so much work
            return (
               <div
                  onMouseDown={e => handleMouseDown(e, item)}
                  onMouseUp={e => handleMouseUp(e)}
                  onMouseMove={e => handleMouseMove(e, item)}
                  key={item.key}
               >
                  {/* //TODO obviously will need somethign smarter here */}
                  <TileRenderer {...item} />
               </div>
            );
         })}

         {sortIntoRenderOrder<IBoardStateTopper>(boardToppers).map(item => {
            return <TreeTopper {...item} {...positionCalc(item)} />;
         })}
      </div>
   );
}

export default GameStateRenderer;
