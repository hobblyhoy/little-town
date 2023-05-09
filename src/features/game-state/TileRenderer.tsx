import { useAppSelector } from '../../app/hooks';
import { IBoardStateTile } from '../../types/BoardTypes';
import { positionCalc } from '../position/Positioner';
import GrassTile from '../tiles/GrassTile';
import RoadAllTile from '../tiles/road/RoadAllTile';
import RoadNoneTile from '../tiles/road/RoadNoneTile';
import { selectBoardTiles } from './GameStateSlice';

function TileRenderer(boardTile: IBoardStateTile) {
   const boardTiles = useAppSelector(selectBoardTiles);

   if (boardTile.tileType === 'grass') {
      return <GrassTile {...boardTile} {...positionCalc(boardTile)} />;
   }

   if (boardTile.tileType === 'road') {
      // Simple POC for now. Just check if theres any neighbors that are road
      // and if so do RoadAllTile instead

      let isConnectedNe =
         boardTile.cellUpperRight && boardTiles[boardTile.cellUpperRight]?.tileType === 'road';

      let isConnectedSe =
         boardTile.cellLowerRight && boardTiles[boardTile.cellLowerRight]?.tileType === 'road';

      let isConnectedSw =
         boardTile.cellLowerLeft && boardTiles[boardTile.cellLowerLeft]?.tileType === 'road';

      let isConnectedNw =
         boardTile.cellUpperLeft && boardTiles[boardTile.cellUpperLeft]?.tileType === 'road';

      let isConnected = isConnectedNe || isConnectedSe || isConnectedSw || isConnectedNw;
      return isConnected ? (
         <RoadAllTile {...boardTile} {...positionCalc(boardTile)} />
      ) : (
         <RoadNoneTile {...boardTile} {...positionCalc(boardTile)} />
      );
   }

   throw new Error('Invalid tileType in TileRenderer');
}

export default TileRenderer;
