import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface SessionState {
  selectedGame: string;
  isOngoing: boolean;
  sessionObject: object;
}
const initialState: SessionState = {
  selectedGame: "",
  isOngoing: false,
  sessionObject: {},
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSelectedGame: (state, action: PayloadAction<string>) => {
      state.selectedGame = action.payload;
    },
    startOngoing: (state) => {
      state.isOngoing = true;
    },
    stopOngoing: (state) => {
      state.isOngoing = false;
    },
    sessionObject: (state, action: PayloadAction<object>) => {
      state.sessionObject = action.payload;
    },
  },
});
export const { setSelectedGame, startOngoing, stopOngoing, sessionObject } =
  sessionSlice.actions;

export const selectSession = (state: RootState) => state.session.sessionObject;
export const selectGame = (state: RootState) => state.session.selectedGame;
export const selectIsOngoing = (state: RootState) => state.session.isOngoing;

export default sessionSlice.reducer;
