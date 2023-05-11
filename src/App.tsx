import GameStateRenderer from './features/game-state/GameStateRenderer';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import {
   addTopper,
   initializeBoardTiles,
} from './features/game-state/GameStateSlice';
import SelectionBar from './features/selection-bar/SelectionBar';
import ClickAndDragManager from './features/click-and-drag/ClickAndDragManager';
import InvalidManager from './features/game-state/InvalidManager';

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initializeBoardTiles());
      dispatch(
         addTopper({
            isoX: 0,
            isoY: 0,
            topperType: 'tree',
            size: 'small',
         })
      );
   }, []);

   return (
      <div className="App">
         <GameStateRenderer />
         <SelectionBar />
         <ClickAndDragManager />
         <InvalidManager />
      </div>
   );
}

export default App;
