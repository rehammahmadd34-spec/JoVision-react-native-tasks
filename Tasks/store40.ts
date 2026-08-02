import {configureStore} from '@reduxjs/toolkit';
import textReducer from './textSlice40';

export const store40 = configureStore({
  reducer: {
    text40: textReducer,
  },
});

export type RootState40 = ReturnType<typeof store40.getState>;