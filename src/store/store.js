import { configureStore } from "@reduxjs/toolkit";
import sensorsReducer from "./sensor/sensorSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    sensors: sensorsReducer,
    auth: authSlice,
  },
});

export default store;
