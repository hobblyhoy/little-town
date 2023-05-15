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
import TimeManager from './features/time/TimeManager';
import ZoomBar from './features/zoom-and-scroll/ZoomBar';
import ScrollWheelZoomManager from './features/zoom-and-scroll/ScrollWheelZoomManager';
import SoundManager from './features/sound/SoundManager';
import SoundBar from './features/sound/SoundBar';
import ScrollBars from './features/zoom-and-scroll/ScrollBars';
import GameStateInitializer from './features/game-state/GameStateInitializer';

function App() {


   return (
      <div className="App overflow-hidden">
         {/* UI */}
         <GameStateRenderer />
         <SelectionBar />
         <ZoomBar />
         <SoundBar />
         <ScrollBars />

         {/* Managers */}
         <ClickAndDragManager />
         <InvalidManager />
         <TimeManager />
         <ScrollWheelZoomManager />
         <SoundManager />

         {/* Initializers */}
         <GameStateInitializer />
      </div>
   );
}

export default App;
