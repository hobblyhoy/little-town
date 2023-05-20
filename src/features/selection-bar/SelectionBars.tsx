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
import Rotate from './assets/rotate4.svg'
import Harvest from './assets/harvest.svg'
import Wheat from './assets/wheat2.svg'
import Windmill from './assets/windmill.svg'

function SelectionBars() {
   const barLocationCss = (bottomUpOrder: number) => css`
      position: fixed;
      left: 0;
      bottom: ${bottomUpOrder * 100 + 20}px;
   `;

   const toolsIcon = <img src={Tools} alt="add" />;
   const addIcon = <img src={Add} alt="add" />;

   const toolBarElements: IBarElement[] = [
      {
         internalName: 'remove',
         icon: <img src={Remove} alt="Road" />,
      },
      {
         internalName: 'rotate',
         icon: <img src={Rotate} alt="Rotate" />,
      },
      {
         internalName: 'harvest',
         icon: <img src={Harvest} alt="Harvest" />,
      },
   ];
   
   const addBarElements: IBarElement[] = [
      {
         internalName: 'tree',
         icon: <img src={Seed} alt="Seed" />,
      },
      {
         internalName: 'road',
         icon: <img src={Road} alt="Road" />,
      },
      {
         internalName: 'wheat',
         icon: <img src={Wheat} alt="Wheat" />,
      },
      {
         internalName: 'windmill',
         icon: <img src={Windmill} alt="Windmill" />,
      },
   ];

   return (
      <div className="cursor-pointer">
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
