import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMouseDownOn, selectMouseMoveOn } from './ClickAndDragSlice';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';
import { addTopper, resetTile, rotateTopper, updateTile } from '../game-state/GameStateSlice';

function ClickAndDragManager() {
   const dispatch = useAppDispatch();
   const mouseDownOn = useAppSelector(selectMouseDownOn);
   const mouseMoveOn = useAppSelector(selectMouseMoveOn);
   const selectedItem = useAppSelector(selectSelectedItem);

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
         case 'tree':
            dispatch(
               addTopper({
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  topperType: 'tree',
                  size: 'init',
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
                     size: 'big',
                     direction: 'bottomRight',
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
      }
   }, [mouseDownOn]);

   //// Click and drag \\\\
   useEffect(() => {
      if (!selectedItem || !mouseDownOn || !mouseMoveOn) return;

      switch (selectedItem) {
         case 'tree':
            dispatch(
               addTopper({
                  isoX: mouseMoveOn.isoX,
                  isoY: mouseMoveOn.isoY,
                  topperType: 'tree',
                  size: 'init',
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

   return <></>;
}

export default ClickAndDragManager;
