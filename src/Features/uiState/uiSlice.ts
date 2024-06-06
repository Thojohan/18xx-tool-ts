import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

function getLocalTheme() {
  const isDark: string | null = localStorage.getItem("dark");
  const initValue = isDark ? JSON.parse(isDark) : false;
  return initValue;
}

interface UiState {
  darkMode: boolean;
}

const darkMode = getLocalTheme();
const initialState: UiState = {
  darkMode,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    darkToggle: (state) => {
      const newDarkState = !state.darkMode;
      state.darkMode = newDarkState;
      localStorage.setItem("dark", newDarkState.toString());
    },
  },
});

export const selectDark = (state: RootState) => state.ui.darkMode;
export const { darkToggle } = uiSlice.actions;
export default uiSlice.reducer;
