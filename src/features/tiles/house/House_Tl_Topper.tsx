/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { customDimensions, standardBaseCss, tileGCss } from '../../../app/constants';
import { ICartesianCoordinates } from '../../../types/BoardTypes';

function House_Tl_Topper(cartProps: ICartesianCoordinates) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 55.860001 57.389783"
         width="55.860001"
         height="57.389782"
         css={[standardBaseCss(cartProps), customDimensions(56, 58) ]}
      >
         <g id="g8066" transform="translate(-1534.9,-263.99007)">
            <g id="g7452">
               <g id="g7444">
                  <polygon
                     className="st59"
                     points="1575.79,280.92 1588.76,285.44 1588.76,304.41 1562.83,319.38 1562.83,300.41 "
                     id="polygon7440"
                  />
                  <polygon
                     className="st22"
                     points="1579.61,293.59 1571.98,297.99 1571.98,306.1 1579.61,301.69 "
                     id="polygon7442"
                  />
               </g>
               <polygon
                  className="st55"
                  points="1562.83,319.38 1562.83,300.41 1536.9,285.44 1536.9,304.41 "
                  id="polygon7446"
               />
               <polygon
                  className="st60"
                  points="1562.83,270.51 1588.76,285.44 1575.79,280.92 1549.87,265.99 "
                  id="polygon7448"
               />
               <polygon
                  className="st57"
                  points="1549.87,265.99 1575.79,280.92 1562.83,300.41 1536.9,285.48 "
                  id="polygon7450"
               />
            </g>
         </g>
      </svg>
   );
}

export default House_Tl_Topper;