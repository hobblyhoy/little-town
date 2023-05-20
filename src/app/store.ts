import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameStateReducer from '../features/game-state/GameStateSlice';
import selectionBarReducer from '../features/selection-bar/SelectionBarSlice';
import clickAndDragReducer from '../features/click-and-drag/ClickAndDragSlice';
import zoomScrollReducer from '../features/zoom-and-scroll/ZoomScrollSlice';

export const store = configureStore({
   reducer: {
      gamestate: gameStateReducer,
      selectionbar: selectionBarReducer,
      clickanddrag: clickAndDragReducer,
      zoomscroll: zoomScrollReducer
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
