/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import {
   buildColorCss,
   buildPositionCss,
   buildSizeCss,
   standardBaseCss,
} from '../../../app/constants';
import { IBoardTopperProps } from '../../../types/BoardTypes';

function House_Big_Tr_Topper({ cartCoords, pixelSize, boardTopper }: IBoardTopperProps) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.908579 82.363698"
         width="55.908581"
         height="82.363686"
         css={[standardBaseCss, buildPositionCss(cartCoords), buildSizeCss(pixelSize)]}

      >
         <g id="g8066" transform="translate(-2315.6184,-504.86633)">
            <g id="g7326-8-0" transform="translate(970.7084,266.61016)">
               <polygon
                  className="st55"
                  points="1346.91,303.65 1372.83,318.62 1372.83,299.65 1359.87,280.16 1346.91,284.68 "
                  id="polygon7314-9-3"
               />
               <polygon
                  className="st59"
                  points="1398.76,284.68 1398.76,303.65 1372.83,318.62 1372.83,299.65 "
                  id="polygon7320-3-1"
               />
               <polygon
                  className="st60"
                  points="1359.87,280.16 1385.8,265.24 1372.83,269.75 1346.91,284.68 "
                  id="polygon7322-2-7"
               />
               <polygon
                  className="st57"
                  points="1372.83,299.65 1398.76,284.72 1385.8,265.24 1359.87,280.16 "
                  id="polygon7324-3-1"
               />
            </g>
            <g id="g7438-5-2" transform="translate(840.83698,247.85853)">
               <g id="g7430-2-8">
                  <polygon
                     className="st55"
                     points="1476.84,303.65 1502.76,318.62 1502.76,299.65 1489.8,280.16 1476.84,284.68 "
                     id="polygon7426-5-2"
                  />
                  <polygon
                     className="st59"
                     points="1485.98,292.83 1493.62,297.24 1493.62,305.34 1485.98,300.93 "
                     id="polygon7428-5-0"
                  />
               </g>
               <polygon
                  className="st59"
                  points="1502.76,318.62 1502.76,299.65 1528.69,284.68 1528.69,303.65 "
                  id="polygon7432-8-1"
               />
               <polygon
                  className="st60"
                  points="1502.76,269.75 1476.84,284.68 1489.8,280.16 1515.72,265.24 "
                  id="polygon7434-9-7"
               />
               <polygon
                  className="st57-no-fill"
                  points="1515.72,265.24 1489.8,280.16 1502.76,299.65 1528.69,284.72 "
                  id="polygon7436-3-2"
                  css={buildColorCss(boardTopper.color!)}

               />
            </g>
            <g id="g7968-3-7" transform="matrix(0.70425676,0,0,0.53634688,981.6332,246.59014)">
               <g id="g4319-0-7" transform="translate(-35.169628,44.730304)">
                  <polygon
                     className="st50"
                     points="1947.19,472.86 1937.09,478.69 1929.65,474.4 1939.76,468.56 "
                     id="polygon7954-0-2"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st62"
                     points="1947.19,450.97 1937.09,456.8 1929.65,452.51 1939.76,446.67 "
                     id="polygon7962-6-3"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st51-b"
                     points="1929.65,452.51 1929.65,474.4 1937.09,478.69 1937.09,456.8 "
                     id="polygon7964-4-4"
                     transform="translate(25.608952,-7.8534121)"
                  />
                  <polygon
                     className="st53-b"
                     points="1947.19,450.97 1947.19,472.86 1937.09,478.69 1937.09,456.8 "
                     id="polygon7966-37-6"
                     transform="translate(25.608952,-7.8534121)"
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default House_Big_Tr_Topper;
