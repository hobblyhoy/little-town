/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import DollarCoin from './assets/dollar-coin.svg';
import { useAppSelector } from '../../app/hooks';
import { selectMoney } from '../game-state/GameStateSlice';
import { useState } from 'react';

function MoneyBar() {
   const currentMoney = useAppSelector(selectMoney);
   const [showInfo, setShowInfo] = useState(false);

   const baseCss = css`
      position: fixed;
      left: 20px;
      top: 20px;
      cursor: default;
   `;

   return (
      <div
         css={baseCss}
         className="opacity-60"
         onMouseEnter={() => setShowInfo(true)}
         onMouseLeave={() => setShowInfo(false)}
      >
         <div className="flex items-center">
            <img src={DollarCoin} />
            <div className="pl-2 ">{currentMoney}</div>
         </div>
         {showInfo && (
            <div className="bg-black rounded-lg p-4 mt-2">
               <div>Use your cash to purchase roads, houses, etc</div>
               <div>Harvest wheat and trees to sell them for a profit</div>
            </div>
         )}
      </div>
   );
}

export default MoneyBar;
