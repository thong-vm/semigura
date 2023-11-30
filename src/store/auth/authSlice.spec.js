import configureStore from "@reduxjs/toolkit";
import {
  authSlice,
  loginAsync,
  logout,
  selectUser,
  selectToken,
  getAuthError,
  getAuthStatus,
} from "./authSlice";

describe("authSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore.default({
      reducer: {
        auth: authSlice.reducer,
      },
    });
  });

  it("should handle initial state", () => {
    expect(store.getState().auth).toEqual({
      token: "",
      user: {},
      status: "IDLE",
      error: "",
    });
  });

  it("should handle loginAsync.pending", () => {
    store.dispatch(loginAsync.pending());
    expect(store.getState().auth.status).toEqual("LOADING");
  });

  it("should handle loginAsync.fulfilled", () => {
    const fakeToken = "fakeToken";
    const fakeUser = { account: "admin", password: "123456" };

    store.dispatch(loginAsync.fulfilled({ token: fakeToken, user: fakeUser }));

    expect(store.getState().auth.status).toEqual("SUCCEEDED");
    expect(store.getState().auth.token).toEqual(fakeToken);
    expect(store.getState().auth.user).toEqual(fakeUser);
  });

  it("should handle loginAsync.rejected", () => {
    const errorMessage = "Failed to log in";
    store.dispatch(loginAsync.rejected({ message: errorMessage }));

    expect(store.getState().auth.status).toEqual("FAILED");
    expect(store.getState().auth.error).toEqual(errorMessage);
  });

  it("should handle logout", () => {
    store.dispatch(logout());

    expect(store.getState().auth.token).toEqual("");
    expect(store.getState().auth.user).toEqual({});
  });

  it("should select user", () => {
    const fakeUser = { account: "admin", password: "123456"  };
    store.dispatch(
      loginAsync.fulfilled({ token: "fakeToken", user: fakeUser })
    );

    expect(selectUser(store.getState())).toEqual(fakeUser);
  });

  it("should select token", () => {
    const fakeToken = "fakeToken";
    store.dispatch(loginAsync.fulfilled({ token: fakeToken, user: {} }));

    expect(selectToken(store.getState())).toEqual(fakeToken);
  });

  it("should get auth error", () => {
    const errorMessage = "Failed to log in";
    store.dispatch(loginAsync.rejected({ message: errorMessage }));

    expect(getAuthError(store.getState())).toEqual(errorMessage);
  });

  it("should get auth status", () => {
    store.dispatch(loginAsync.pending());
    expect(getAuthStatus(store.getState())).toEqual("LOADING");
  });
});
