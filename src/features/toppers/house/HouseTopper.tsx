import { IBoardTopperProps } from '../../../types/BoardTypes';
import House_Big_Bl_Topper from './House_Big_Bl_Topper';
import House_Big_Br_Topper from './House_Big_Br_Topper';
import House_Big_Tl_Topper from './House_Big_Tl_Topper';
import House_Big_Tr_Topper from './House_Big_Tr_Topper';
import House_Small_Bl_Topper from './House_Small_Bl_Topper';
import House_Small_Br_Topper from './House_Small_Br_Topper';
import House_Small_Tl_Topper from './House_Small_Tl_Topper';
import House_Small_Tr_Topper from './House_Small_Tr_Topper';

function HouseTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.size) {
      case 'small':
         switch (props.boardTopper.direction) {
            case 'topLeft':
               return <House_Small_Tl_Topper {...props} />;
            case 'topRight':
               return <House_Small_Tr_Topper {...props} />;
            case 'bottomLeft':
               return <House_Small_Bl_Topper {...props} />;
            case 'bottomRight':
               return <House_Small_Br_Topper {...props} />;
            default:
               throw new Error('unimplemented direction in HouseTopper');
         }
      case 'big':
         switch (props.boardTopper.direction) {
            case 'topLeft':
               return <House_Big_Tl_Topper {...props} />;
            case 'topRight':
               return <House_Big_Tr_Topper {...props} />;
            case 'bottomLeft':
               return <House_Big_Bl_Topper {...props} />;
            case 'bottomRight':
               return <House_Big_Br_Topper {...props} />;
            default:
               throw new Error('unimplemented direction in HouseTopper');
         }
      default:
         throw new Error('unimplemented size in HouseTopper');
   }
}

export default HouseTopper;
