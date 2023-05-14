import { useAppDispatch } from '../../app/hooks';
import { zoomIn, zoomOut } from './ZoomScrollSlice';
import plusIcon from './assets/plus.svg';
import minusIcon from './assets/minus.svg';

function ZoomBar() {
   const dispatch = useAppDispatch();

   return (
      <div className="fixed top-20 w-12 h-20 right-4 bg-white bg-opacity-40 rounded-full flex flex-col items-center justify-between p-2">
         <div onClick={() => dispatch(zoomIn())} className="cursor-pointer">
            <img src={plusIcon} className="h-6 w-6" alt="Zoom in" />
         </div>
         <div onClick={() => dispatch(zoomOut())} className="cursor-pointer">
            <img src={minusIcon} className="h-6 w-6" alt="Zoom out" />
         </div>
      </div>
   );
}

export default ZoomBar;
