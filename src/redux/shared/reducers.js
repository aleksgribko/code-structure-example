import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  word: null
};

const globalSlice = createSlice({
  name: "globalReducer",
  initialState,
  reducers: {
    SET_USER(state, action) {
      return {
        ...state,
        user: action.payload,
        word: action.payload ? state.word : null
      };
    },
    SET_WORD_RESULT(state, action) {
      return {
        ...state,
        word: action.payload,
      };
    },
  },
});

export const { SET_USER, SET_WORD_RESULT } = globalSlice.actions;
// Reducer
export default globalSlice.reducer;
