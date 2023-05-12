import { useAppSelector } from '../../app/hooks';
import { IBoardStateTile } from '../../types/BoardTypes';
import { getBoardItemPosition } from '../position-and-size/Positioner';
import { getBoardItemSize } from '../position-and-size/Sizer';
import GrassTile from '../tiles/GrassTile';
import RoadTile from '../tiles/road/RoadTile';
import { selectZoom } from '../zoom-and-scroll/ZoomScrollSlice';
import { selectBoardTiles } from './GameStateSlice';

function TileRenderer(boardTile: IBoardStateTile) {
   const boardTiles = useAppSelector(selectBoardTiles);
   const zoom = useAppSelector(selectZoom);
   const cartCoords = getBoardItemPosition(boardTile, zoom);
   const pixelSize = getBoardItemSize(boardTile, zoom);

   switch (boardTile.tileType) {
      case 'grass':
         return <GrassTile boardTile={boardTile} cartCoords={cartCoords} pixelSize={pixelSize} />;

      case 'road':
         const isConnectedTopLeft = !!(
            boardTile.cellUpperLeft && boardTiles[boardTile.cellUpperLeft]?.tileType === 'road'
         );
         const isConnectedTopRight = !!(
            boardTile.cellUpperRight && boardTiles[boardTile.cellUpperRight]?.tileType === 'road'
         );
         const isConnectedBottomLeft = !!(
            boardTile.cellLowerLeft && boardTiles[boardTile.cellLowerLeft]?.tileType === 'road'
         );
         const isConnectedBottomRight = !!(
            boardTile.cellLowerRight && boardTiles[boardTile.cellLowerRight]?.tileType === 'road'
         );

         return (
            <RoadTile
               topLeft={isConnectedTopLeft}
               topRight={isConnectedTopRight}
               bottomLeft={isConnectedBottomLeft}
               bottomRight={isConnectedBottomRight}
               boardTile={boardTile}
               cartCoords={cartCoords}
               pixelSize={pixelSize}
            />
         );

      default:
         throw new Error('Invalid tileType in TileRenderer:');
   }
}

export default TileRenderer;
