/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import SlideOutBar from './SlideOutBar';
import { IBarElement } from '../../types/BarTypes';

import Add from './assets/add.svg';
import Tools from './assets/tools.svg';
import Seed from './assets/seed.svg';
import Road from './assets/road.svg';
import Remove from './assets/remove2.svg';
import Rotate from './assets/rotate4.svg';
import Harvest from './assets/harvest.svg';
import Wheat from './assets/wheat2.svg';
import Windmill from './assets/windmill.svg';
import House from './assets/house.svg';
import Upgrade from './assets/upgrade.svg';
import { useAppSelector } from '../../app/hooks';
import {
   selectBoardTiles,
   selectBoardToppers,
} from '../game-state/GameStateSlice';
import {
   dictionaryToArray,
   isBig,
   isHarvestable,
   isHouse,
   isNotBig,
   isNotRock,
   isRoad,
   isStructure,
   isWindmill,
} from '../../app/utils';

function SelectionBars() {
   const baseCss = css`
      pointer-events: none;
   `;

   const barLocationCss = (bottomUpOrder: number) => css`
      position: fixed;
      left: 0;
      bottom: ${bottomUpOrder * 100 + 20}px;
   `;

   const boardTiles = dictionaryToArray(useAppSelector(selectBoardTiles));
   const boardToppers = dictionaryToArray(useAppSelector(selectBoardToppers));

   const toolsIcon = <img src={Tools} alt="add" />;
   const addIcon = <img src={Add} alt="add" />;

   const toolBarElements: IBarElement[] = [
      {
         internalName: 'remove',
         icon: <img src={Remove} alt="Road" />,
         isDisabled: boardToppers.filter(isNotRock).length === 0,
      },
      {
         internalName: 'rotate',
         icon: <img src={Rotate} alt="Rotate" />,
         isDisabled: boardToppers.filter(isStructure).length === 0,
      },
      {
         internalName: 'harvest',
         icon: <img src={Harvest} alt="Harvest" />,
         isDisabled:
            boardToppers.filter(isHarvestable).filter(isBig).length === 0,
      },
      {
         internalName: 'upgrade',
         icon: <img src={Upgrade} alt="Upgrade" />,
         isDisabled: boardToppers.filter(isHouse).filter(isNotBig).length === 0,
      },
   ];

   const addBarElements: IBarElement[] = [
      {
         internalName: 'tree',
         icon: <img src={Seed} alt="Seed" />,
         isDisabled: false,
      },
      {
         internalName: 'road',
         icon: <img src={Road} alt="Road" />,
         isDisabled: false,
      },
      {
         internalName: 'house',
         icon: <img src={House} alt="House" />,
         isDisabled: boardTiles.filter(isRoad).length === 0,
      },
      {
         internalName: 'windmill',
         icon: <img src={Windmill} alt="Windmill" />,
         isDisabled: boardTiles.filter(isRoad).length === 0,
      },
      {
         internalName: 'wheat',
         icon: <img src={Wheat} alt="Wheat" />,
         isDisabled: boardToppers.filter(isWindmill).length === 0,
      },
   ];

   return (
      <div css={baseCss} className="cursor-pointer">
         <div css={barLocationCss(1)}>
            <SlideOutBar barElements={toolBarElements} icon={toolsIcon} />
         </div>
         <div css={barLocationCss(0)}>
            <SlideOutBar barElements={addBarElements} icon={addIcon} />
         </div>
      </div>
   );
}
export default SelectionBars;
