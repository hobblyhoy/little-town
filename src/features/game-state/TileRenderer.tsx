import { useAppSelector } from '../../app/hooks';
import { IBoardStateTile } from '../../types/BoardTypes';
import { positionCalc } from '../position/Positioner';
import GrassTile from '../tiles/GrassTile';
import RoadTile from '../tiles/road/RoadTile';
import { selectBoardTiles } from './GameStateSlice';

function TileRenderer(boardTile: IBoardStateTile) {
   const boardTiles = useAppSelector(selectBoardTiles);

   switch (boardTile.tileType) {
      case 'grass':
         return <GrassTile {...boardTile} {...positionCalc(boardTile)} />;

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
               {...positionCalc(boardTile)}
               topLeft={isConnectedTopLeft}
               topRight={isConnectedTopRight}
               bottomLeft={isConnectedBottomLeft}
               bottomRight={isConnectedBottomRight}
            />
         );


      default:
         throw new Error('Invalid tileType in TileRenderer');
   }
}

export default TileRenderer;
