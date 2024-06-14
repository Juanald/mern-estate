import { createSlice } from "@reduxjs/toolkit";
// Redux is a global state management system that allows for you to keep track of state from a centralized database. This is done through slices, which take the shape of initialStates, and have functions associated with them. You can export these functions (called reducers), and use them externally to deal with state. With this, all state is handled centrally
// Corresponds with the shape of our user state, our user slice takes this shape
const initialState = {
  currentUser: null,
  loading: false,
  errors: null,
};

// Creating a slice so that we can use global state to set our errors and loading variables. Action is some side effect produced. Comes in with a payload
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    // A function on success
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; // Each action comes in with a payload JSON object
      state.loading = false;
      state.errors = null;
    },
    signInFailure: (state, action) => {
      state.errors = action.payload; // Should the sign in attempt fail, payload will hold an error
      state.loading = false;
    },
  },
});

// Making an export to use it elsewhere
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
