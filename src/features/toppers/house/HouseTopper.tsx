import { Directional, IBoardTopperProps, ICartesianCoordinates, IMultiDirectional } from '../../../types/BoardTypes';
import House_Bl_Topper from './House_Bl_Topper';
import House_Br_Topper from './House_Br_Topper';
import House_Tl_Topper from './House_Tl_Topper';
import House_Tr_Topper from './House_Tr_Topper';

// TODO gotta get direction into the board state so I can stop this custom madness
// (After the change it will be inside props.boardItem.direction)
interface IProps extends IBoardTopperProps {
   direction: Directional;
}
function HouseTopper({ direction, ...props }: IProps) {
   switch (direction) {
      case 'topLeft':
         return <House_Tl_Topper {...props} />;
      case 'topRight':
         return <House_Tr_Topper {...props} />;
      case 'bottomLeft':
         return <House_Bl_Topper {...props} />;
      case 'bottomRight':
         return <House_Br_Topper {...props} />;
   }
}

export default HouseTopper;
