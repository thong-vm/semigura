import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Sensor from "../../pages/sensor/Sensor";
// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_URL = "http://localhost:8000/sensors";

const initialState = {
  sensors: [],
};

export const fetchSensors = createAsyncThunk(
  "sensors/fetchSensors",
  async () => {
    const { result, error } = await Sensor.getAll();
    return !error ? result : console.log("Sensor.getAll: ", error);
  }
);

export const deleteSensor = createAsyncThunk(
  "sensor/deleteSensor",
  async (initialSensor) => {
    const { id } = initialSensor;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) return initialSensor;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);
const sensorsSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    setList: (state, action) => {
      var { sensors } = action.payload;
      state.sensors = sensors;
    },
    addToList: (state, action) => {
      var { sensor } = action.payload;
      state.sensors = [sensor, ...state.sensors];
    },
    updateList: (state, action) => {
      var { id, sensor } = action.payload;
      state.sensors = state.sensors.map((element) => {
        if (element.id === id) {
          return sensor;
        } else {
          return element;
        }
      });
    },
    deleteItem: (state, action) => {
      var { id } = action.payload;
      state.sensors = state.sensors.filter((element) => element.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSensors.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.sensors = action.payload;
      console.log("state.sensor :", state.sensor);
    });
  },
});
export const { setList, addToList, updateList, deleteItem } =
  sensorsSlice.actions;
export const selectAllSensors = (state) => state.sensors.sensors;
export default sensorsSlice.reducer;
