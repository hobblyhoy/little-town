import { IBoardTileProps, ICartesianCoordinates, IMultiDirectional } from '../../../types/BoardTypes';
import Road_All_Tile from './Road_All_Tile';
import Road_None_Tile from './Road_None_Tile';
import Road_TlTrBl_Tile from './Road_TlTrBl_Tile';
import Road_TlTrBr_Tile from './Road_TlTrBr_Tile';
import Road_BlBr_Tile from './Road_BlBr_Tile';
import Road_Bl_Tile from './Road_Bl_Tile';
import Road_Br_Tile from './Road_Br_Tile';
import Road_TlBlBr_Tile from './Road_TlBlBr_Tile';
import Road_TlBl_Tile from './Road_TlBl_Tile';
import Road_TlBr_Tile from './Road_TlBr_Tile';
import Road_TlTr_Tile from './Road_TlTr_Tile';
import Road_Tl_Tile from './Road_Tl_Tile';
import Road_TrBlBr_Tile from './Road_TrBlBr_Tile';
import Road_TrBl_Tile from './Road_TrBl_Tile';
import Road_TrBr_Tile from './Road_TrBr_Tile';
import Road_Tr_Tile from './Road_Tr_Tile';

//interface IProps extends ICartesianCoordinates, IMultiDirectional {}
interface IProps extends IBoardTileProps, IMultiDirectional {}
function RoadTile({ topLeft, topRight, bottomLeft, bottomRight, ...props }: IProps) {
   if (topLeft && topRight && bottomLeft && bottomRight) {
      return <Road_All_Tile {...props} />;
   } else if (topLeft && topRight && bottomLeft && !bottomRight) {
      return <Road_TlTrBl_Tile {...props} />;
   } else if (topLeft && topRight && !bottomLeft && bottomRight) {
      return <Road_TlTrBr_Tile {...props} />;
   } else if (topLeft && topRight && !bottomLeft && !bottomRight) {
      return <Road_TlTr_Tile {...props} />;
   } else if (topLeft && !topRight && bottomLeft && bottomRight) {
      return <Road_TlBlBr_Tile {...props} />;
   } else if (topLeft && !topRight && bottomLeft && !bottomRight) {
      return <Road_TlBl_Tile {...props} />;
   } else if (topLeft && !topRight && !bottomLeft && bottomRight) {
      return <Road_TlBr_Tile {...props} />;
   } else if (topLeft && !topRight && !bottomLeft && !bottomRight) {
      return <Road_Tl_Tile {...props} />;
   } else if (!topLeft && topRight && bottomLeft && bottomRight) {
      return <Road_TrBlBr_Tile {...props} />;
   } else if (!topLeft && topRight && bottomLeft && !bottomRight) {
      return <Road_TrBl_Tile {...props} />;
   } else if (!topLeft && topRight && !bottomLeft && bottomRight) {
      return <Road_TrBr_Tile {...props} />;
   } else if (!topLeft && topRight && !bottomLeft && !bottomRight) {
      return <Road_Tr_Tile {...props} />;
   } else if (!topLeft && !topRight && bottomLeft && bottomRight) {
      return <Road_BlBr_Tile {...props} />;
   } else if (!topLeft && !topRight && bottomLeft && !bottomRight) {
      return <Road_Bl_Tile {...props} />;
   } else if (!topLeft && !topRight && !bottomLeft && bottomRight) {
      return <Road_Br_Tile {...props} />;
   } else {
      return <Road_None_Tile {...props} />;
   }
}

export default RoadTile;