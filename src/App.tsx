/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import './App.css';
import GrassTile from './features/tiles/GrassTile';
import TreeTopper from './features/toppers/TreeTopper';

const baseCss = css`
   color: blue;
`;

function App() {
   const generateTiles = (size: number) => {
      const tiles = [];
      for (let row = 0; row < size; row++) {
         for (let col = 0; col <= row; col++) {
            const isoX = col;
            const isoY = row - col;
            tiles.push({ isoX, isoY });
         }
      }

      for (let row = size; row < size * 2 - 1; row++) {
         for (let col = row - size + 1; col < size; col++) {
            const isoX = col;
            const isoY = row - col;
            tiles.push({ isoX, isoY });
         }
      }
      //console.log(tiles)
      return tiles;
   };

   const displaySet = generateTiles(3);

   return (
      <div className="App" css={baseCss}>
         {displaySet.map(x => (
            <GrassTile {...x} isoZ={0} />
         ))}
         <TreeTopper isoX={0} isoY={0} isoZ={1} size="big" />

         <GrassTile isoX={2} isoY={2} isoZ={1} />
      </div>
   );
}

export default App;
