import authReducer, { login, logout } from "./authSlice";
import { IDLE } from "../../constants/store";

describe("authSlice", () => {
  const initialState = {
    token: "",
    user: {},
    role: "",
    status: IDLE,
    error: "",
  };

  it("should handle initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual({
      token: "",
      user: {},
      role: "",
      status: IDLE,
      error: "",
    });
  });

  it("should handle login", () => {
    const user = { username: "user1" };
    const token = "abcdef";
    const actual = authReducer(initialState, login({ user, token }));
    expect(actual.user.username).toEqual(user.username);
    expect(actual.token).toEqual(token);
  });

  it("should handle logout", () => {
    const noneUser = {};
    const noneToken = "";
    const actual = authReducer(initialState, logout());
    expect(actual.user).toEqual(noneUser);
    expect(actual.token).toEqual(noneToken);
  });
});
