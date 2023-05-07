import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gameStateReducer from '../features/game-state/GameStateSlice';
import selectionBarReducer from '../features/selection-bar/SelectionBarSlice';
import clickAndDragReducer from '../features/click-and-drag/ClickAndDragSlice';

export const store = configureStore({
   reducer: {
      counter: counterReducer,
      gamestate: gameStateReducer,
      selectionbar: selectionBarReducer,
      clickanddrag: clickAndDragReducer,
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
