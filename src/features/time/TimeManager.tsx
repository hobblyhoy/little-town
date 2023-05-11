import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { growTopper, selectBoardToppers } from '../game-state/GameStateSlice';
import { dictionaryToArray } from '../../app/utils';
import { growthTime } from '../../app/constants';

function TimeManager() {
   const boardToppers = useAppSelector(selectBoardToppers);
   const dispatch = useAppDispatch();

   const timeoutStoreRef = useRef<{ [key: string]: NodeJS.Timeout }>({});
   //const timeoutStoreRef.current: { [key: string]: NodeJS.Timeout } = {};

   const grow = (key: string) => {
      delete timeoutStoreRef.current[key];
      dispatch(growTopper(key));
   };

   useEffect(() => {
      // Get all the trees and wheat that are not full grown
      const growableToppers = dictionaryToArray(boardToppers)
         .filter(x => x.topperType === 'tree' || x.topperType === 'wheat')
         .filter(x => x.size !== 'big');

      // search our timeoutStoreRef.current for any that no longer exist (deleted toppers), kill those timeouts
      const growableToppersKeys = growableToppers.map(x => x.key);
      Object.keys(timeoutStoreRef.current).forEach(refKey => {
         if (!growableToppersKeys.includes(refKey)) {
            clearTimeout(timeoutStoreRef.current[refKey]);
            delete timeoutStoreRef.current[refKey];
         }
      });

      // Everything new added this cycle we attach timeouts to trigger it to grow
      growableToppers.forEach(growableTopper => {
         if (!Object.keys(timeoutStoreRef.current).includes(growableTopper.key)) {
            timeoutStoreRef.current[growableTopper.key] = setTimeout(
               () => grow(growableTopper.key),
               growthTime
            );
         }
      });
   }, [boardToppers]);

   return <></>;
}

export default TimeManager;
