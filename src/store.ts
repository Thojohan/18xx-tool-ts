import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./Features/uiState/uiSlice";
import sessionReducer from "./Features/session/sessionSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    session: sessionReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
