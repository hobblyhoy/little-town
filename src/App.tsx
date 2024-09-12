import GameStateRenderer from './features/game-state/GameStateRenderer';
import ClickAndDragManager from './features/click-and-drag/ClickAndDragManager';
import InvalidManager from './features/game-state/InvalidManager';
import TimeManager from './features/time/TimeManager';
import ZoomBar from './features/zoom-and-scroll/ZoomBar';
import ScrollWheelZoomManager from './features/zoom-and-scroll/ScrollWheelZoomManager';
import SoundManager from './features/sound/SoundManager';
import SoundBar from './features/sound/SoundBar';
import ScrollBars from './features/zoom-and-scroll/ScrollBars';
import GameStateInitializer from './features/game-state/GameStateInitializer';
import SelectionBars from './features/selection-bar/SelectionBars';
import MoneyBar from './features/inventory/MoneyBar';
import UserWarning from './features/click-and-drag/UserWarning';

function App() {


   return (
      <div className="App h-screen w-screen overflow-hidden">
         {/* UI */}
         <GameStateRenderer />
         <ZoomBar />
         <SoundBar />
         <ScrollBars />
         <SelectionBars />
         <MoneyBar />
         <UserWarning />

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
