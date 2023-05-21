import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectUserHasInteractedWithDocument } from '../click-and-drag/ClickAndDragSlice';
import BackgroundMusic from './assets/piano-music.m4a';
import Pop from './assets/pop.m4a';
import Shh from './assets/shh2.m4a';
import Click from './assets/click.m4a';
import {
   selectMusicOn,
   selectRecentlyResetTile,
   selectRecentlyDeletedTopper,
   selectRecentlyUpdatedToppers,
   selectSoundEffectsOn,
   selectRecentlyUpdatedTile,
} from '../game-state/GameStateSlice';
import { throttle } from 'lodash';

function SoundManager() {
   const musicOn = useAppSelector(selectMusicOn);
   const soundEffectsOn = useAppSelector(selectSoundEffectsOn);

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

   useEffect(() => {
      const audio = backgroundMusicRef.current;
      if (musicOn && hasTouchedDom) {
         audio?.play();
      } else {
         audio?.pause();
      }
   }, [musicOn]);

   //// Pops \\\\
   const newToppers = useAppSelector(selectRecentlyUpdatedToppers);
   const playPopThrottled = useCallback(
      throttle(() => {
         const audio = new Audio(Pop);
         audio.play();
      }, 250),
      []
   );
   useEffect(() => {
      if (!soundEffectsOn) return;

      playPopThrottled();
   }, [newToppers]);

   //// Shh \\\\
   const deletedTopper = useAppSelector(selectRecentlyDeletedTopper);
   const resetTile = useAppSelector(selectRecentlyResetTile);
   useEffect(() => {
      if (!soundEffectsOn) return;

      const audio = new Audio(Shh);
      audio.play();
   }, [deletedTopper, resetTile]);

   //// Click \\\\
   const updatedTile = useAppSelector(selectRecentlyUpdatedTile);
   useEffect(() => {
      if (!soundEffectsOn) return;

      const audio = new Audio(Click);
      audio.play();
   }, [updatedTile]);

   return (
      <div>
         <audio ref={backgroundMusicRef} src={BackgroundMusic} />
      </div>
   );
}

export default SoundManager;
