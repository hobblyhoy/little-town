/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

import { buildPositionCss, buildSizeCss, standardBaseCss } from '../../../app/constants';
import { IBoardTopperProps, ICartesianCoordinates } from '../../../types/BoardTypes';
import { useMemo } from 'react';
import { getRandomInclusive } from '../../../app/utils';

const smokeRise = keyframes`
   0%, 40% {
      transform: translateY(0);
      opacity: 0;
   }
   50% {
      opacity: 0.5;
   }
   100% {
      transform: translateY(-50px);
      opacity: 0;
   }
`;

function Smoke({ cartCoords }: IBoardTopperProps) {
   // For now this little animation on houses is the only thing planning
   // so YAGNI applies here and just hard-setting the offsets from the given
   // asset rather than building a system around it
   const standardOffset: ICartesianCoordinates = {
      cartX: 10,
      cartY: -35,
   };

   const randomStartDelay = useMemo(() => {
      return getRandomInclusive(0, 8);
   }, []);

   const animationCss = css`
      animation: ${smokeRise} 14s linear ${randomStartDelay}s infinite;
   `;

   const cartCoordsWithOffset: ICartesianCoordinates = {
      cartX: cartCoords.cartX + standardOffset.cartX,
      cartY: cartCoords.cartY + standardOffset.cartY,
   };
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 34.92995 34.409997"
         width="34.929951"
         height="34.409992"
         css={[
            standardBaseCss,
            buildPositionCss(cartCoordsWithOffset),
            buildSizeCss({ width: 35, height: 35 }),
            animationCss
         ]}
         className="opacity-0"
      >
         <g id="g8066" transform="translate(-1557.4253,-221.70483)">
            <g id="g8020" transform="translate(-389.72475,-297.3852)">
               <circle className="st14" cx="1966.84" cy="528.84003" r="7.75" id="circle8010" />
               <circle className="st14" cx="1960.52" cy="532.81" r="5.5799999" id="circle8012" />
               <circle className="st14" cx="1957.63" cy="543.02002" r="8.4799995" id="circle8014" />
               <circle className="st14" cx="1966.84" cy="539.38" r="7.75" id="circle8016" />
               <circle className="st14" cx="1973.83" cy="532.29999" r="6.25" id="circle8018" />
            </g>
         </g>
      </svg>
   );
}

export default Smoke;
