import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   selectMouseDownOn,
   selectMouseMoveOn,
   selectTouchEnd,
   selectTouchMove,
   selectTouchStart,
} from './ClickAndDragSlice';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';
import { addTopper, growTopper, resetTile, rotateTopper, updateTile } from '../game-state/GameStateSlice';
import { scrollMobile, scrollMobileCommit } from '../zoom-and-scroll/ZoomScrollSlice';
import { generateInternalKey } from '../../app/utils';

function ClickAndDragManager() {
   const dispatch = useAppDispatch();
   const mouseDownOn = useAppSelector(selectMouseDownOn);
   const mouseMoveOn = useAppSelector(selectMouseMoveOn);
   const selectedItem = useAppSelector(selectSelectedItem);
   const touchStart = useAppSelector(selectTouchStart);
   const touchMove = useAppSelector(selectTouchMove);
   const touchEnd = useAppSelector(selectTouchEnd);

   //// Mouse Down \\\\
   useEffect(() => {
      console.log('mousedown on ..');
      console.log(mouseDownOn);

      if (!selectedItem || !mouseDownOn) return;

      switch (selectedItem) {
         case 'remove':
            dispatch(resetTile({ isoX: mouseDownOn.isoX, isoY: mouseDownOn.isoY, isoZ: 0 }));
            break;
         case 'rotate':
            dispatch(rotateTopper({ isoX: mouseDownOn.isoX, isoY: mouseDownOn.isoY, isoZ: 1 }));
            break;
         case 'upgrade':
            dispatch(growTopper(generateInternalKey({isoX: mouseDownOn.isoX, isoY: mouseDownOn.isoY, isoZ: 1})));
            break;
         case 'tree':
            dispatch(
               addTopper({
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  topperType: 'tree',
                  size: 'tiny',
               })
            );
            break;
         case 'road':
            dispatch(
               updateTile({
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  tileType: 'road',
               })
            );
            break;
         case 'house':
            if (!mouseDownOn.cellAbove) {
               dispatch(
                  addTopper({
                     isoX: mouseDownOn.isoX,
                     isoY: mouseDownOn.isoY,
                     topperType: 'house',
                     direction: 'bottomRight',
                     size: 'small',
                  })
               );
            } else {
               dispatch(rotateTopper({ isoX: mouseDownOn.isoX, isoY: mouseDownOn.isoY, isoZ: 1 }));
            }
            break;
         case 'wheat':
            dispatch(
               addTopper({
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  topperType: 'wheat',
                  size: 'small',
               })
            );
            break;
         case 'windmill':
            if (!mouseDownOn.cellAbove) {
               dispatch(
                  addTopper({
                     isoX: mouseDownOn.isoX,
                     isoY: mouseDownOn.isoY,
                     topperType: 'windmill',
                     direction: 'bottomLeft',
                  })
               );
            } else {
               dispatch(rotateTopper({ isoX: mouseDownOn.isoX, isoY: mouseDownOn.isoY, isoZ: 1 }));
            }
            break;
      }
   }, [mouseDownOn]);

   //// Click and drag \\\\
   useEffect(() => {
      if (!selectedItem || !mouseDownOn || !mouseMoveOn) return;

      switch (selectedItem) {
         case 'remove':
            console.log('removing ', { isoX: mouseMoveOn.isoX, isoY: mouseMoveOn.isoY, isoZ: 0 });
            dispatch(resetTile({ isoX: mouseMoveOn.isoX, isoY: mouseMoveOn.isoY, isoZ: 0 }));
            break;
         case 'tree':
            dispatch(
               addTopper({
                  isoX: mouseMoveOn.isoX,
                  isoY: mouseMoveOn.isoY,
                  topperType: 'tree',
                  size: 'tiny',
               })
            );
            break;
         case 'road':
            dispatch(
               updateTile({
                  isoX: mouseMoveOn.isoX,
                  isoY: mouseMoveOn.isoY,
                  tileType: 'road',
               })
            );
            break;
      }
   }, [mouseMoveOn]);

   //// Mobile Touch \\\\

   useEffect(() => {
      if (selectedItem !== null || touchStart === null || touchMove === null) return;

      const currentOffsetX = touchMove.cartX - touchStart.cartX;
      const currentOffsetY = touchMove.cartY - touchStart.cartY;

      dispatch(scrollMobile({ offsetX: currentOffsetX, offsetY: currentOffsetY }));
   }, [touchMove]);

   useEffect(() => {
      if (touchEnd === false || selectedItem !== null) return;

      dispatch(scrollMobileCommit());
   }, [touchEnd]);

   return <></>;
}

export default ClickAndDragManager;
