import { IBoardStateTopper } from '../../types/BoardTypes';
import { positionCalc } from '../position/Positioner';
import HouseTopper from '../toppers/house/HouseTopper';
import TreeTopper from '../toppers/tree/TreeTopper';
import WheatTopper from '../toppers/wheat/WheatTopper';

function TopperRenderer(boardTopper: IBoardStateTopper) {
   switch (boardTopper.topperType) {
      case 'tree':
         return <TreeTopper {...boardTopper} {...positionCalc(boardTopper)} />;
      case 'house':
         // TODO directional stuff including add it to the state support
         return <HouseTopper direction="bottomRight" {...positionCalc(boardTopper)} />;
      case 'wheat':
         return <WheatTopper {...boardTopper} {...positionCalc(boardTopper)} />;
      default:
         throw new Error('Invalid topperType in TopperRenderer');
   }
}

export default TopperRenderer;
