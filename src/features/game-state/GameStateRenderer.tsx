import { useAppDispatch, useAppSelector } from '../../app/hooks';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { selectBoardTiles, selectBoardToppers } from './GameStateSlice';
import { useCallback, useEffect, useState } from 'react';
import { IBoardStateTile, IBoardStateTopper, ICartesianCoordinates } from '../../types/BoardTypes';
import { sortIntoRenderOrder } from '../../app/utils';
import {
   setMouseDownOn,
   setMouseMoveOn,
   setTouchMove,
   setTouchStart,
   signalTouchEnd,
} from '../click-and-drag/ClickAndDragSlice';
import TileRenderer from './TileRenderer';
import TopperRenderer from './TopperRenderer';
import {
   selectScrollOffsetX,
   selectScrollOffsetY,
} from '../zoom-and-scroll/ZoomScrollSlice';
import {  throttle } from 'lodash';

function GameStateRenderer() {
   const boardTiles = useAppSelector(selectBoardTiles);
   const boardToppers = useAppSelector(selectBoardToppers);
   const scrollOffsetX = useAppSelector(selectScrollOffsetX);
   const scrollOffsetY = useAppSelector(selectScrollOffsetY);
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
      transform: translate(${scrollOffsetX}px, ${scrollOffsetY}px);
      touch-action: none;
   `;

   //// Mobile Touch \\\\
   const onTouchStart = (e: React.TouchEvent) => {
      dispatch(
         setTouchStart({
            cartX: e.touches[0].clientX,
            cartY: e.touches[0].clientY,
         })
      );
   };

   const dispatchThrottled = useCallback(
      throttle((e: React.TouchEvent) => {
         dispatch(
            setTouchMove({
               cartX: e.touches[0].clientX,
               cartY: e.touches[0].clientY,
            })
         );
      }, 32),
      []
   );
   const onTouchMove = (e: React.TouchEvent) => {
      dispatchThrottled(e);
   };

   const onTouchEnd = () => {
      dispatch(signalTouchEnd());
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
