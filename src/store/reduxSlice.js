import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loginAttempts: 3,
  formData: {},
  isUserFormEnabled: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.loginAttempts = 3;
      state.formData = {};
      state.isUserFormEnabled = true;
    },
    setLoginAttempts: (state, action) => {
      state.loginAttempts = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { login, setLoginAttempts, setFormData } = authSlice.actions;
export default authSlice.reducer;
