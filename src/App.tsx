/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import './App.css';
import GrassTile from './features/tiles/GrassTile';

const baseCss = css`
   color: blue;
`;

function App() {
   return (
      <div className="App" css={baseCss}>
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         <GrassTile isoX={0} isoY={0} />
         <GrassTile isoX={1} isoY={0} />
         <GrassTile isoX={0} isoY={1} />
         <GrassTile isoX={1} isoY={1} />
         <GrassTile isoX={2} isoY={1} />







         
      </div>
   );
}

export default App;
