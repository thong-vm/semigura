import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { retryAxios } from "../../retry/axiosRetry";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../constants/store";
import LocalStorage from "../../services/localStorage/localStorage";
import { AuthLogin } from "../../services/api/auth/authApi";
const initialState = {
  token: "",
  user: {},
  status: IDLE,
  error: "",
};

export const loginAsync = createAsyncThunk("auth/loginAsync", async (value) => {
  const { result, error } = await AuthLogin.post({
    account: value.username,
    password: value.password,
  });
  return !error ? result : console.log("AuthLogin: ", error);
});
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      var { user, token } = action.payload;
      state.user.username = user.username;
      state.token = token;
      LocalStorage.set("token", token);
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
      LocalStorage.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        const token = action.payload.token;
        state.token = token;
        LocalStorage.set("token", token);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const getAuthError = (state) => state.auth.error;
export const getAuthStatus = (state) => state.auth.status;
export default authSlice.reducer;
