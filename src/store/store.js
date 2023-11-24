import { configureStore } from "@reduxjs/toolkit";
import sensorsReducer from "./sensor/sensorSlice";

export const store = configureStore({
  reducer: {
    sensors: sensorsReducer,
  },
});

export default store;
