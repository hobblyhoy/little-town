/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ICartesianCoordinates } from '../../../types/BoardTypes';
import { standardBaseCss } from '../../../app/constants';

function Tree_Big_Topper(cartProps: ICartesianCoordinates) {
   return (
      <svg
         viewBox="0 0 52.970002 74.389994"
         width="52.970001"
         height="74.389992"
         css={standardBaseCss(cartProps)}
      >
         <g id="g8066" transform="translate(-248.45,-1349.08)">
            <g id="g6950">
               <ellipse
                  className="st45"
                  cx="274.92999"
                  cy="1412.87"
                  rx="15.94"
                  ry="8.6000004"
                  id="ellipse6944"
               />
               <path
                  className="st19"
                  d="m 274.93,1412.87 v 0 c -2.32,0 -4.2,-1.88 -4.2,-4.2 v -29.11 c 0,-2.32 1.88,-4.2 4.2,-4.2 v 0 c 2.32,0 4.2,1.88 4.2,4.2 v 29.11 c 0.01,2.32 -1.88,4.2 -4.2,4.2 z"
                  id="path6946"
               />
               <path
                  className="st45"
                  d="m 299.42,1375.55 c 0,12.09 -8.76,22.14 -20.29,24.13 -1.37,0.24 -2.77,0.36 -4.2,0.36 -1.43,0 -2.84,-0.12 -4.2,-0.36 -6.44,-1.11 -12.02,-4.75 -15.69,-9.85 -1.08,-1.51 -2,-3.14 -2.72,-4.87 v 0 c -1.21,-2.9 -1.87,-6.07 -1.87,-9.4 0,-13.53 10.96,-24.48 24.48,-24.48 2.97,0 5.82,0.53 8.46,1.5 0.31,0.12 0.61,0.23 0.91,0.36 1.45,0.6 2.83,1.34 4.13,2.19 6.62,4.37 10.99,11.89 10.99,20.42 z"
                  id="path6948"
               />
            </g>
         </g>
      </svg>
   );
}

export default Tree_Big_Topper;
