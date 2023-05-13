import { IBoardTopperProps } from '../../../types/BoardTypes';
import House_Bl_Topper from './House_Bl_Topper';
import House_Br_Topper from './House_Br_Topper';
import House_Tl_Topper from './House_Tl_Topper';
import House_Tr_Topper from './House_Tr_Topper';

function HouseTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.direction) {
      case 'topLeft':
         return <House_Tl_Topper {...props} />;
      case 'topRight':
         return <House_Tr_Topper {...props} />;
      case 'bottomLeft':
         return <House_Bl_Topper {...props} />;
      case 'bottomRight':
         return <House_Br_Topper {...props} />;
      default:
         throw new Error('unimplemented direction in HouseTopper');
   }
}

export default HouseTopper;
