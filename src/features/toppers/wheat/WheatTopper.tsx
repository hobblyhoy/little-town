import { IBoardTopperProps } from '../../../types/BoardTypes';
import Wheat_High_Topper from './Wheat_High_Topper';
import Wheat_Low_Topper from './Wheat_Low_Topper';

function WheatTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.size) {
      case 'small':
         return <Wheat_Low_Topper {...props} />;
      case 'big':
         return <Wheat_High_Topper {...props} />;
      default:
         throw new Error('Invalid size wheat tile');
   }
}

export default WheatTopper;
