import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // tha name property represents the name of the slice
  name: "user",
  initialState: {
    username: "",
  },
  reducers: {
    setUsername: (state, action) => {
      console.log("Payload: ", action.payload);
      state.username = action.payload;
      console.log("Updated state: ", state.username);
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
