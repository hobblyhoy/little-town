/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ICartesianCoordinates, ISizeable } from '../../types/BoardTypes';

import { customDimensions, standardBaseCss } from '../../app/constants';

interface IProps extends ICartesianCoordinates, ISizeable {}
function TreeTopper({ topperSize, cartX, cartY }: IProps) {
   return topperSize === 'small' ? (
      <TreeSmallA cartX={cartX} cartY={cartY} />
   ) : (
      <TreeBigA cartX={cartX} cartY={cartY} />
   );
}

export default TreeTopper;

function TreeBigA(cartProps: ICartesianCoordinates) {
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

function TreeSmallA(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 33.930001 47.049963"
         width="33.93"
         height="47.049961"
         // css={smallBaseCss(cartProps)}
         css={[standardBaseCss(cartProps), customDimensions(34, 48)]}
      >
         <g id="g8066" transform="translate(-304.79,-1376.42)">
            <g id="g6970">
               <ellipse
                  className="st45"
                  cx="321.73999"
                  cy="1416.21"
                  rx="9.75"
                  ry="5.2600002"
                  id="ellipse6964"
               />
               <path
                  className="st19"
                  d="m 321.74,1416.21 v 0 c -1.42,0 -2.57,-1.15 -2.57,-2.57 v -17.8 c 0,-1.42 1.15,-2.57 2.57,-2.57 v 0 c 1.42,0 2.57,1.15 2.57,2.57 v 17.8 c 0,1.42 -1.15,2.57 -2.57,2.57 z"
                  id="path6966"
               />
               <path
                  className="st45"
                  d="m 336.72,1393.39 c 0,7.39 -5.36,13.53 -12.4,14.75 -0.84,0.15 -1.69,0.22 -2.57,0.22 -0.88,0 -1.74,-0.07 -2.57,-0.22 -3.94,-0.68 -7.35,-2.9 -9.59,-6.02 -0.66,-0.92 -1.22,-1.92 -1.66,-2.98 v 0 c -0.74,-1.77 -1.14,-3.71 -1.14,-5.75 0,-8.27 6.7,-14.97 14.97,-14.97 1.82,0 3.56,0.32 5.17,0.92 0.19,0.07 0.37,0.14 0.56,0.22 0.89,0.37 1.73,0.82 2.52,1.34 4.04,2.68 6.71,7.28 6.71,12.49 z"
                  id="path6968"
               />
            </g>
         </g>
      </svg>
   );
}
