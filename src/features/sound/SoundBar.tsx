/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SoundIcon from './assets/sound-icon.svg';

import { useState } from 'react';

function SoundBar() {
   const [isHovered, setIsHovered] = useState(false);

   const handleClick = (item: string) => {
      console.log(`${item} clicked`);
   };

   const twUiClasses =
      'fixed top-4 right-4 bg-white bg-opacity-40 rounded-full h-12 w-12 flex items-center justify-end overflow-hidden p-1';
   const twAnimationClasses = 'transition-all duration-300 ease-in-out';
   const twHover = isHovered ? 'w-48' : '';

   return (
      <div
         className={`${twUiClasses} ${twAnimationClasses} ${twHover}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="flex items-center justify-end w-full">
            {isHovered && (
               <div className="flex flex-grow justify-center">
                  <div
                     className="cursor-pointer mr-2 transition-all duration-500"
                     onClick={() => handleClick('Music')}
                  >
                     Music
                  </div>
                  <div
                     className="cursor-pointer mr-2 transition-all duration-500"
                     onClick={() => handleClick('Effects')}
                  >
                     Effects
                  </div>
               </div>
            )}
            <img src={SoundIcon} alt="Sound icon" className="h-10 w-10" />
         </div>
      </div>
   );
}

export default SoundBar;
