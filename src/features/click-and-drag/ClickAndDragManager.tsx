// We have to handle clicking and dragging over multiple sprites for laying down roads and other features
// so we'll immediately send every click onto assets up into this click manager and not have the assets
// have to figure anything out themselves.

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMouseDownOn, selectMouseMoveOn } from './ClickAndDragSlice';
import { selectSelectedItem } from '../selection-bar/SelectionBarSlice';
import { addTopper, updateTile } from '../game-state/GameStateSlice';

// dont know how to do that yet tho lol

// maybe we have a state like isMouseDown and events firing on every mouseEnter and if isMouseDown then the assets which we've mouseEnter'd
// get added onto some stack. Then we just need to figure out the mouseup and apply whatever changes are needed.

// alternatively we wait for isMouseDown then we attach an eventlistener onto mousemove. This might add complexity for figuring out
// what asset we're currently over though.

// this would also actually be a better place to have our logic that figure out what quadrent they've clicked into

function ClickAndDragManager() {
   const dispatch = useAppDispatch();
   const mouseDownOn = useAppSelector(selectMouseDownOn);
   const mouseMoveOn = useAppSelector(selectMouseMoveOn);
   const selectedItem = useAppSelector(selectSelectedItem);

   //// Mouse Down \\\\
   useEffect(() => {
      // TODO need to add something where mouseDownOn doesnt fire if theres something already there or it's otherwise invalid

      console.log('mousedown on ..');
      console.log(mouseDownOn);

      if (!selectedItem || !mouseDownOn) return;

      switch (selectedItem) {
         case 'tree':
            dispatch(
               addTopper({
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  isoZ: 1,
                  type: 'topper',
                  topperType: 'tree',
                  topperSize: 'small',
               })
            );
            break;
         case 'road':
            dispatch(
               updateTile({
                  tileType: 'road',
                  type: 'tile',
                  isoX: mouseDownOn.isoX,
                  isoY: mouseDownOn.isoY,
                  isoZ: 0,
               })
            );
            break;
         case 'house':
            dispatch(addTopper({
               isoX: mouseDownOn.isoX,
               isoY: mouseDownOn.isoY,
               isoZ: 1,
               type: 'topper',
               topperType: 'house',
               topperSize: 'big'
            }))
            break;
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
                  isoZ: 1,
                  type: 'topper',
                  topperType: 'tree',
                  topperSize: 'small',
               })
            );
            break;
         case 'road':
            dispatch(
               updateTile({
                  tileType: 'road',
                  type: 'tile',
                  isoX: mouseMoveOn.isoX,
                  isoY: mouseMoveOn.isoY,
                  isoZ: 0,
               })
            );
            break;
      }
   }, [mouseMoveOn]);

   return <></>;
}

export default ClickAndDragManager;
