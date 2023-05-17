import { useAppDispatch, useAppSelector } from '../../app/hooks';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useCallback, useEffect, useState } from 'react';
import { IBoardStateTile, IBoardStateTopper } from '../../types/BoardTypes';
import { sortIntoRenderOrder } from '../../app/utils';
import { setMouseDownOn, setMouseMoveOn } from '../click-and-drag/ClickAndDragSlice';
import TileRenderer from './TileRenderer';
import TopperRenderer from './TopperRenderer';
import {
   scrollMobile,
   scrollMobileCommit,
   selectScrollOffset,
} from '../zoom-and-scroll/ZoomScrollSlice';
import { debounce, throttle } from 'lodash';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';

function GameStateRenderer() {
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);
   const scrollOffset = useAppSelector(selectScrollOffset);
   const selectedItem = useAppSelector(selectSelectedItem);
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

   //// Mobile touch scroll offset \\\\
   // TODO can probably migrate all of this into the ClickAndDrag Manager
   const [startTouchX, setStartTouchX] = useState<number | null>(null);
   const [startTouchY, setStartTouchY] = useState<number | null>(null);

   const dispatchDebounced = useCallback(
      throttle(offset => {
         dispatch(scrollMobile(offset));
      }, 32),
      []
   );

   const onTouchStart = (e: React.TouchEvent) => {
      if (selectedItem !== null) return;
      
      setStartTouchX(e.touches[0].clientX);
      setStartTouchY(e.touches[0].clientY);
   };

   const onTouchMove = (e: React.TouchEvent) => {
      if (selectedItem !== null) return;

      if (startTouchX !== null && startTouchY !== null) {
         const currentOffsetX = e.touches[0].clientX - startTouchX;
         const currentOffsetY = e.touches[0].clientY - startTouchY;
         dispatchDebounced({ offsetX: currentOffsetX, offsetY: currentOffsetY });
      }
   };

   const onTouchEnd = () => {
      if (selectedItem !== null) return;

      setStartTouchX(null);
      setStartTouchY(null);
      dispatch(scrollMobileCommit());
      dispatchDebounced.cancel();
   };

   return (
      <div css={gameBoardScrollOffsetCss}>
         {sortIntoRenderOrder<IBoardStateTile>(boardTiles).map(item => {
            return (
               <div
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                  onTouchCancel={onTouchEnd}
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
