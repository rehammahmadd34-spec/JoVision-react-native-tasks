import {configureStore} from '@reduxjs/toolkit';
import textReducer from './textSlice39';

export const store39 = configureStore({
  reducer: {
    text39: textReducer,
  },
});

export type RootState39 = ReturnType<typeof store39.getState>;
export type AppDispatch39 = typeof store39.dispatch;