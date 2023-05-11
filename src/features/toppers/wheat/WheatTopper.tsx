import {
   ICartesianCoordinates,
   ISizeable,
} from '../../../types/BoardTypes';
import Wheat_High_Topper from './Wheat_High_Topper';
import Wheat_Low_Topper from './Wheat_Low_Topper';

interface IProps extends ICartesianCoordinates, ISizeable {}
function WheatTopper({ size, ...cartProps }: IProps) {
   switch (size) {
      case 'small': {
         return <Wheat_Low_Topper {...cartProps} />;
      }
      case 'big': {
         return <Wheat_High_Topper {...cartProps} />;
      }
      default: {
         throw new Error('Invalid size wheat tile');
      }
   }
}

export default WheatTopper;
