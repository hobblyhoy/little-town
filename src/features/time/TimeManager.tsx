import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   growTopper,
   selectRecentlyDeletedTopper,
   selectRecentlyUpdatedToppers,
} from '../game-state/GameStateSlice';
import { growthTime } from '../../app/constants';

function TimeManager() {
   const newToppers = useAppSelector(selectRecentlyUpdatedToppers);
   const deletedTopper = useAppSelector(selectRecentlyDeletedTopper);
   const dispatch = useAppDispatch();

   const timeoutStoreRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

   const grow = (key: string) => {
      delete timeoutStoreRef.current[key];
      dispatch(growTopper(key));
   };

   useEffect(() => {
      if (newToppers.length === 0) return;
      newToppers.forEach(newTopper => {
         if (newTopper.topperType !== 'tree' && newTopper.topperType !== 'wheat') return;
         if (newTopper.size === 'big') return;
   
         timeoutStoreRef.current[newTopper.key] = setTimeout(() => grow(newTopper.key), growthTime);
      })
   }, [newToppers]);

   useEffect(() => {
      if (!deletedTopper) return;

      if (Object.keys(timeoutStoreRef.current).includes(deletedTopper.key)) {
         clearTimeout(timeoutStoreRef.current[deletedTopper.key]);
         delete timeoutStoreRef.current[deletedTopper.key];
      }
   }, [deletedTopper]);

   return <></>;
}

export default TimeManager;
