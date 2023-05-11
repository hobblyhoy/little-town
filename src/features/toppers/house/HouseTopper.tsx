import { Directional, ICartesianCoordinates, IMultiDirectional } from '../../../types/BoardTypes';
import House_Bl_Topper from './House_Bl_Topper';
import House_Br_Topper from './House_Br_Topper';
import House_Tl_Topper from './House_Tl_Topper';
import House_Tr_Topper from './House_Tr_Topper';

interface IProps extends ICartesianCoordinates {
   direction: Directional;
}
function HouseTopper({ direction, ...cartProps }: IProps) {
   switch (direction) {
      case 'topLeft':
         return <House_Tl_Topper {...cartProps} />;
      case 'topRight':
         return <House_Tr_Topper {...cartProps} />;
      case 'bottomLeft':
         return <House_Bl_Topper {...cartProps} />;
      case 'bottomRight':
         return <House_Br_Topper {...cartProps} />;
   }
}

export default HouseTopper;
