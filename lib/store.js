import { configureStore } from "@reduxjs/toolkit";
import userManager from "./features/user/user";

export const store = configureStore({
  reducer: {
    user: userManager,
  },
});
