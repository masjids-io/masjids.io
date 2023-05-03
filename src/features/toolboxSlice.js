import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  enabled: true,
};

export const toolboxSlice = createSlice({
  name: "toolbox",
  initialState,
  reducers: {
    toggle: (state) => {
      state.enabled = !state.enabled;
    },
  },
});


export const { toggle } = toolboxSlice.actions
export const selectEnabled = state => state.toolbox.enabled;


export default toolboxSlice.reducer