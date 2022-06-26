import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: [
    {
      id: "",
      password: "",
    },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
