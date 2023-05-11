import { useAppDispatch, useAppSelector } from '../../app/hooks';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect, MouseEvent } from 'react';
import TreeTopper from '../toppers/tree/TreeTopper';
import { IBoardStateTile, IBoardStateTopper } from '../../types/BoardTypes';
import { sortIntoRenderOrder } from '../../app/utils';
import { setMouseDownOn, setMouseMoveOn } from '../click-and-drag/ClickAndDragSlice';
import { positionCalc } from '../position/Positioner';
import TileRenderer from './TileRenderer';
import TopperRenderer from './TopperRenderer';

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

   const handleMouseDown = (item: IBoardStateTile) => {
      dispatch(setMouseDownOn(item));
   };

   const handleMouseUp = () => {
      dispatch(setMouseDownOn(null));
   };

   const handleMouseMove = (item: IBoardStateTile) => {
      dispatch(setMouseMoveOn(item));
   };

   const dimCss = css`
      opacity: 0.8;
      filter: saturate(40%);
      cursor: unset;
   `;

   const notDimCss = css`
      cursor: pointer;
   `;

   return (
      <div>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            return (
               <div
                  onTouchStart={e => handleMouseDown(item)}
                  onTouchEnd={e => handleMouseUp()}
                  onMouseDown={e => handleMouseDown(item)}
                  onMouseUp={e => handleMouseUp()}
                  onMouseMove={e => handleMouseMove(item)}
                  key={item.key}
                  css={item.isInvalid ? dimCss : notDimCss}
               >
                  <TileRenderer {...item} />
               </div>
            );
         })}

         {sortIntoRenderOrder<IBoardStateTopper>(boardToppers).map(item => {
            return (
               <div key={item.key} css={item.isInvalid ? dimCss : null}>
                  <TopperRenderer {...item} />
               </div>
            );
         })}
      </div>
   );
}

export default GameStateRenderer;
