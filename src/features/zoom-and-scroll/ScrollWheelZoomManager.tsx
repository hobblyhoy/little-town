import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { zoomIn, zoomOut } from "./ZoomScrollSlice";

function ScrollWheelZoomManager() {
   const dispatch = useAppDispatch();

   const handleScroll = (e: { deltaY: number; }) => {
      if (e.deltaY < 0) {
        dispatch(zoomIn());
      } else {
        dispatch(zoomOut());
      }
    };
  
    useEffect(() => {
      window.addEventListener('wheel', handleScroll);
      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, []);
    
   return <></>
}

export default ScrollWheelZoomManager;