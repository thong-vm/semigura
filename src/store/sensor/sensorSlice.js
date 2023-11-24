import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  sensors: [],
};

export const fetchSensors = createAsyncThunk(
  "sensors/fetchSensors",
  async () => {
    const response = await axios.get(BASE_URL);
    return response?.data;
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
      state.sensors = action.payload;
    },
    addToList: (state, action) => {
      state.sensors = [action.payload, ...state.sensors];
    },
    updateList: (state, action) => {
      state.sensors = state.sensors.map((element) => {
        if (element.id.toString() === action.payload.id.toString()) {
          return action.payload;
        } else {
          return element;
        }
      });
    },
    deleteItem: (state, action) => {
      state.sensors = state.sensors.filter(
        (element) => element.id !== action.payload.id
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSensors.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.sensors = state.sensors.concat(action.payload);
    });
  },
});
export const { setList, addToList, updateList, deleteItem } =
  sensorsSlice.actions;
export const selectAllSensors = (state) => state.sensors.sensors;
export default sensorsSlice.reducer;
