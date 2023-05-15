import { useAppDispatch, useAppSelector } from '../../app/hooks';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useEffect } from 'react';
import { IBoardStateTile, IBoardStateTopper } from '../../types/BoardTypes';
import { sortIntoRenderOrder } from '../../app/utils';
import { setMouseDownOn, setMouseMoveOn } from '../click-and-drag/ClickAndDragSlice';
import TileRenderer from './TileRenderer';
import TopperRenderer from './TopperRenderer';
import { selectScrollOffset } from '../zoom-and-scroll/ZoomScrollSlice';

function GameStateRenderer() {
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);
   const scrollOffset = useAppSelector(selectScrollOffset);
   const dispatch = useAppDispatch();

   useEffect(() => {
      console.log({ boardTiles });
   }, [boardTiles]);
   useEffect(() => {
      console.log({ boardToppers });
   }, [boardToppers]);

   const handleMouseDown = (
      event: React.MouseEvent<HTMLDivElement> | null,
      item: IBoardStateTile
   ) => {
      if (event && event.button !== 0) return;
      dispatch(setMouseDownOn(item));
   };

   const handleMouseUp = () => {
      dispatch(setMouseDownOn(null));
   };

   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, item: IBoardStateTile) => {
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

   const gameBoardScrollOffsetCss = css`
      transform: translate(${scrollOffset.offsetX}px, ${scrollOffset.offsetY}px);
   `;

   return (
      <div css={gameBoardScrollOffsetCss}>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            return (
               <div
                  //onTouchStart={e => handleMouseDown(null, item)}
                  //onTouchEnd={e => handleMouseUp()}
                  onMouseDown={e => handleMouseDown(e, item)}
                  onMouseUp={e => handleMouseUp()}
                  onMouseMove={e => handleMouseMove(e, item)}
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
