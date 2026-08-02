import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TextState = {
  value: string;
};

const initialState: TextState = {
  value: '',
};

const textSlice40 = createSlice({
  name: 'text40',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {updateText} = textSlice40.actions;
export default textSlice40.reducer;