/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SoundIcon from './assets/sound-icon.svg';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   selectMusicOn,
   selectSoundEffectsOn,
   toggleMusic,
   toggleSoundEffects,
} from '../game-state/GameStateSlice';

function SoundBar() {
   const [isHovered, setIsHovered] = useState(false);
   const dispatch = useAppDispatch();
   const musicOn = useAppSelector(selectMusicOn);
   const soundEffectsOn = useAppSelector(selectSoundEffectsOn);

   const twUiClasses =
      'fixed top-4 right-4 bg-white bg-opacity-40 rounded-full h-12 w-12 flex items-center justify-end overflow-hidden p-2';
   const twAnimationClasses = 'transition-all duration-300 ease-in-out';
   const twHover = isHovered ? 'w-64' : '';

   return (
      <div
         className={`${twUiClasses} ${twAnimationClasses} ${twHover}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="flex items-center justify-end w-full">
            {isHovered && (
               <div className="flex flex-grow justify-evenly">
                  <div
                     className={`cursor-pointer whitespace-nowrap ${musicOn ? '' : 'opacity-60'}`}
                     onClick={() => dispatch(toggleMusic())}
                  >
                     Music {musicOn ? 'ON' : 'OFF'}
                  </div>
                  <div
                     className={`cursor-pointer whitespace-nowrap ${soundEffectsOn ? '' : 'opacity-60'}`}
                     onClick={() => dispatch(toggleSoundEffects())}
                  >
                     Effects {soundEffectsOn ? 'ON' : 'OFF'}
                  </div>
               </div>
            )}
            <img src={SoundIcon} alt="Sound icon" className="h-10 w-10" />
         </div>
      </div>
   );
}

export default SoundBar;
