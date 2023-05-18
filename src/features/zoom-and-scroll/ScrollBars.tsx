/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useState, useCallback } from 'react';
import { CartesianDirectional } from '../../types/BoardTypes';
import { useAppDispatch } from '../../app/hooks';
import { scroll } from './ZoomScrollSlice';
import upIcon from './assets/up.svg';
import leftIcon from './assets/left.svg';
import rightIcon from './assets/right.svg';
import downIcon from './assets/down.svg';
import useBreakpoint from '../../app/useBreakpoint';

type IScrollBarProps = {
   position: CartesianDirectional;
};

function ScrollBar({ position }: IScrollBarProps) {
   const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
   const dispatch = useAppDispatch();

   // TODO we'll get better perf out of requestAnimationFrame but this works for now
   const startTimer = useCallback(() => {
      const element = document.getElementById(`scroll-bar-${position}`);
      // "onMouseLeave" is not always reliable so we build in some extra protection here
      if (element && element.matches(':hover')) {
         dispatch(scroll(position));
         setTimer(setTimeout(startTimer, 20));
      } else {
         handleMouseLeave();
      }
   }, [position]);

   const handleMouseEnter = () => {
      startTimer();
   };

   const handleMouseLeave = () => {
      if (timer) {
         clearInterval(timer);
         setTimer(null);
      }
   };

   const commonClasses =
      'flex items-center justify-center text-center text-white hover:bg-white hover:bg-opacity-40 cursor-pointer';
   const specificClasses = {
      top: 'fixed top-0 left-1/4 w-1/2 h-16',
      bottom: 'fixed bottom-0 left-1/4 w-1/2 h-16',
      left: 'fixed top-1/4 left-0 w-16 h-1/2',
      right: 'fixed top-1/4 right-0 w-16 h-1/2',
   };
   const gradientCss = css`
      &:hover {
         background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
         );
      }
   `;

   const getIcon = () => {
      switch (position) {
         case 'top':
            return upIcon;
         case 'left':
            return leftIcon;
         case 'right':
            return rightIcon;
         case 'bottom':
            return downIcon;
      }
   };
   return (
      <div
         id={`scroll-bar-${position}`}
         className={`${commonClasses} ${specificClasses[position]}`}
         css={gradientCss}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {timer && <img src={getIcon()} className="h-16 w-16" alt={'Position mover ' + position} />}
      </div>
   );
}

function ScrollBars() {
   const { isDesktop } = useBreakpoint();
   return isDesktop ? (
      <div className="h-screen w-screen">
         <ScrollBar position="top" />
         <ScrollBar position="bottom" />
         <ScrollBar position="left" />
         <ScrollBar position="right" />
      </div>
   ) : (
      <div className="h-screen w-screen">TEST D</div>
   );
}

export default ScrollBars;
