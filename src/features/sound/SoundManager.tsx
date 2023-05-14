import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectUserHasInteractedWithDocument } from '../click-and-drag/ClickAndDragSlice';
import backgroundMusic from './assets/piano-music.m4a';
import pop from './assets/pop.m4a';
import shh from './assets/shh2.m4a';
import {
   selectRecentlyDeletedTopper,
   selectRecentlyUpdatedTopper,
} from '../game-state/GameStateSlice';

function SoundManager() {
   //// Background Music \\\\
   const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
   const [isFirstPlay, setIsFirstPlay] = useState(true);
   const hasTouchedDom = useAppSelector(selectUserHasInteractedWithDocument);

   useEffect(() => {
      if (!hasTouchedDom || !backgroundMusicRef.current) return;

      const audio = backgroundMusicRef.current;
      audio.volume = isFirstPlay ? 0 : 1;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
         playPromise
            .then(_ => {
               if (isFirstPlay) {
                  const fadeAudio = setInterval(() => {
                     if (audio.volume < 0.7) {
                        audio.volume += 0.025;
                     } else {
                        clearInterval(fadeAudio);
                     }
                  }, 200);
                  setIsFirstPlay(false);
               }
            })
            .catch(error => {
               console.error('Playback failed due to no supported sources:', error);
            });
      }

      return () => {
         backgroundMusicRef.current?.pause();
      };
   }, [hasTouchedDom]);

   //// Pops \\\\
   const newTopper = useAppSelector(selectRecentlyUpdatedTopper);
   useEffect(() => {
      const audio = new Audio(pop);
      audio.play();
   }, [newTopper]);

   //// Shh \\\\
   const deletedTopper = useAppSelector(selectRecentlyDeletedTopper);
   useEffect(() => {
      const audio = new Audio(shh);
      audio.play();
   }, [deletedTopper]);

   return (
      <div>
         <audio ref={backgroundMusicRef} src={backgroundMusic} />
      </div>
   );
}

export default SoundManager;
