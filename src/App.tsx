/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import './App.css';
import GameStateRenderer from './features/game-state/GameStateRenderer';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { addTopper, initializeBoardTiles } from './features/game-state/GameStateSlice';
import { generateInternalKey } from './app/utils';

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initializeBoardTiles());
      dispatch(
         addTopper({
            isoX: 0,
            isoY: 0,
            isoZ: 1,
            type: 'topper',
            topperType: 'tree',
            topperSize: 'small',
            key: generateInternalKey({ isoX: 0, isoY: 0, isoZ: 1 }),
         })
      );
   }, []);

   return (
      <div className="App">
         {/* {displaySet.map(x => (
            <GrassTile {...x} isoZ={0} />
         ))}
         <TreeTopper isoX={0} isoY={0} isoZ={1} size="big" /> */}

         {/* <GrassTile isoX={2} isoY={2} isoZ={1} /> */}
         <GameStateRenderer />
      </div>
   );
}

export default App;
