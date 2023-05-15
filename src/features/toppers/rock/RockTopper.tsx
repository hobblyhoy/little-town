import { IBoardTopperProps } from "../../../types/BoardTypes";
import Rock_Big_Topper from "./Rock_Big_Topper";
import Rock_Small_Topper from "./Rock_Small_Topper";
import Rock_Tiny_Topper from "./Rock_Tiny_Topper";

function RockTopper(props: IBoardTopperProps) {
   switch (props.boardTopper.size) {
      case 'tiny':
         return <Rock_Tiny_Topper {...props} />;
      case 'small':
         return <Rock_Small_Topper {...props} />;
      case 'big':
         return <Rock_Big_Topper {...props} />;
      default:
         throw new Error('unimplemented size in TreeTopper');
   }
}

export default RockTopper;