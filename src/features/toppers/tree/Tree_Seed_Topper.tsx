/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { IBoardTopperProps } from '../../../types/BoardTypes';
import { buildSizeCss, buildPositionCss, standardBaseCss } from '../../../app/constants';

function Tree_Seed_Topper({ cartCoords, pixelSize }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 15.938303 13.731171"
         width="15.938303"
         height="13.731171"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}
      >
         <g id="g8066" transform="translate(-215.84778,-1398.0366)">
            <path
               className="st46"
               d="m 219.40912,1408.2064 v -2.4996 c 0,-1.0844 0.46579,-2.1136 1.27663,-2.8856 v 0 c 1.70794,-1.599 4.48548,-1.599 6.21066,0 l 0.0517,0.055 c 0.8281,0.772 1.27664,1.8012 1.27664,2.8855 v 2.4445"
               id="path6934"
            />
         </g>
      </svg>
   );
}

export default Tree_Seed_Topper;
