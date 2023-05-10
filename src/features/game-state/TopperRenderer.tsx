import { IBoardStateTopper } from '../../types/BoardTypes';
import { positionCalc } from '../position/Positioner';
import HouseTopper from '../tiles/house/HouseTopper';
import TreeTopper from '../toppers/TreeTopper';

function TopperRenderer(boardTopper: IBoardStateTopper) {
   if (boardTopper.topperType === 'tree') {
      return <TreeTopper {...boardTopper} {...positionCalc(boardTopper)} />;
   }

   if (boardTopper.topperType === 'house') {
      // TODO directional stuff including add it to the state support
      return <HouseTopper direction="bottomRight" {...positionCalc(boardTopper)} />;
   }

   throw new Error('Invalid topperType in TopperRenderer');
}

export default TopperRenderer;
