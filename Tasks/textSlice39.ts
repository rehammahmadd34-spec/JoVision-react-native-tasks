import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TextState = {
  value: string;
};

const initialState: TextState = {
  value: '',
};

const textSlice39 = createSlice({
  name: 'text39',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {updateText} = textSlice39.actions;
export default textSlice39.reducer;