import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   growTopper,
   selectRecentlyDeletedTopper,
   selectRecentlyUpdatedTopper,
} from '../game-state/GameStateSlice';
import { growthTime } from '../../app/constants';

function TimeManager() {
   const newTopper = useAppSelector(selectRecentlyUpdatedTopper);
   const deletedTopper = useAppSelector(selectRecentlyDeletedTopper);
   const dispatch = useAppDispatch();

   const timeoutStoreRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

   const grow = (key: string) => {
      delete timeoutStoreRef.current[key];
      dispatch(growTopper(key));
   };

   useEffect(() => {
      if (!newTopper) return;
      if (newTopper.topperType !== 'tree' && newTopper.topperType !== 'wheat') return;
      if (newTopper.size === 'big') return;

      timeoutStoreRef.current[newTopper.key] = setTimeout(() => grow(newTopper.key), growthTime);
   }, [newTopper]);

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
