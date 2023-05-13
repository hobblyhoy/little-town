import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectUserHasInteractedWithDocument } from '../click-and-drag/ClickAndDragSlice';
import relaxingAfternoonLoop from './relaxing-afternoon-loop.mp3';

function SoundManager() {
   const audioRef = useRef<HTMLAudioElement | null>(null);

   const hasTouchedDom = useAppSelector(selectUserHasInteractedWithDocument);

   useEffect(() => {
      if (!hasTouchedDom) return;

      //audioRef.current?.play();

      return () => {
         audioRef.current?.pause();
      };
   }, [hasTouchedDom]);

   return (
      <div>
         <audio ref={audioRef} src={relaxingAfternoonLoop} loop />
      </div>
   );
}

export default SoundManager;
