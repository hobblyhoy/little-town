import { IBoardTopperProps } from "../../../types/BoardTypes";
import Windmill_Bl_Topper from "./Windmill_Bl_Topper";
import Windmill_Br_Topper from "./Windmill_Br_Topper";
import Windmill_Tl_Topper from "./Windmill_Tl_Topper";
import Windmill_Tr_Topper from "./Windmill_Tr_Topper";

function WindmillTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.direction) {
      case 'topLeft':
         return <Windmill_Tl_Topper {...props} />;
      case 'topRight':
         return <Windmill_Tr_Topper {...props} />;
      case 'bottomLeft':
         return <Windmill_Bl_Topper {...props} />;
      case 'bottomRight':
         return <Windmill_Br_Topper {...props} />;
      default:
         throw new Error('unimplemented direction in WindmillTopper');
   }
}

export default WindmillTopper;