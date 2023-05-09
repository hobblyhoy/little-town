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
      let isConnectedNe = false;
      let isConnectedSe = false;
      let isConnectedSw = false;
      let isConnectedNw = false;

      if (boardTile.cellUpperRight && boardTiles[boardTile.cellUpperRight]?.tileType === 'road') {
         isConnectedNe = true;
      }

      if (boardTile.cellLowerRight && boardTiles[boardTile.cellLowerRight]?.tileType === 'road') {
         isConnectedSe = true;
      }

      if (boardTile.cellLowerLeft && boardTiles[boardTile.cellLowerLeft]?.tileType === 'road') {
         isConnectedSw = true;
      }

      if (boardTile.cellUpperLeft && boardTiles[boardTile.cellUpperLeft]?.tileType === 'road') {
         isConnectedNw = true;
      }

      let isConnected = isConnectedNe || isConnectedSe || isConnectedSw || isConnectedNw;
      console.log(boardTile.isoX,boardTile.isoY, isConnected);
      return isConnected ? (
         <RoadAllTile {...boardTile} {...positionCalc(boardTile)} />
      ) : (
         <RoadNoneTile {...boardTile} {...positionCalc(boardTile)} />
      );
   }

   throw 'Invalid tileType in TileRenderer';
}

export default TileRenderer;
