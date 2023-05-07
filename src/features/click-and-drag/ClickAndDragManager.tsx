// We have to handle clicking and dragging over multiple sprites for laying down roads and other features
// so we'll immediately send every click onto assets up into this click manager and not have the assets
// have to figure anything out themselves. 

// dont know how to do that yet tho lol

// maybe we have a state like isMouseDown and events firing on every mouseEnter and if isMouseDown then the assets which we've mouseEnter'd 
// get added onto some stack. Then we just need to figure out the mouseup and apply whatever changes are needed.

// alternatively we wait for isMouseDown then we attach an eventlistener onto mousemove. This might add complexity for figuring out
// what asset we're currently over though.

// this would also actually be a better place to have our logic that figure out what quadrent they've clicked into


function ClickAndDragManager() {
   return <div>hi</div>
}

export default ClickAndDragManager;