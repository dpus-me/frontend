import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  id: 0,
  profile: "",
  username: "",
};

export const userManager = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    login: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.id = action.payload.id;
      state.profile = action.payload.profile;
      state.username = action.payload.username;
    },
  },
});

export const { reset, login } = userManager.actions;
export default userManager.reducer;
