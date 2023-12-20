import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import Sensor from "../../pages/sensor/Sensor";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../constants/store";
import FilterObjectList from "../../utils/FilterObjectList";
const BASE_URL = "http://localhost:8000/sensors";

const initialState = {
  sensors: [],
  filterSensor: {},
  searchFields: [],
  status: IDLE,
  error: "",
};

export const fetchSensors = createAsyncThunk(
  "sensors/fetchSensors",
  async () => {
    // const { result, error } = await Sensor.getAll();
    // return !error ? result : console.log("Sensor.getAll: ", error);
    const response = await axios.get(BASE_URL);
    return response?.data;
  }
);

export const addSensor = createAsyncThunk(
  "sensor/addSensor",
  async (newSensor) => {
    try {
      const response = await axios.post(`${BASE_URL}`, newSensor);
      if (response?.status === 201) {
        return response.data;
      }
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
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

export const updateSensor = createAsyncThunk(
  "sensor/updateSensor",
  async (updateSensor) => {
    const { id, ...sensorData } = updateSensor;
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, sensorData);
      if (response?.status === 200) return updateSensor;
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
      state.sensors = [...state.sensors, sensor];
    },
    updateList: (state, action) => {
      var { sensor } = action.payload;
      state.sensors = state.sensors.map((element) => {
        if (element.id === sensor.id) {
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
    setFilterSensor: (state, action) => {
      var sensor = action.payload;
      state.filterSensor = sensor;
    },
    setSearchFields: (state, action) => {
      var searchFields = action.payload;
      state.searchFields = searchFields;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSensors.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchSensors.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.sensors = action.payload;
      })
      .addCase(fetchSensors.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});
export const selectAllSensors = (state) => state.sensors.sensors;
export const selectSearchFields = (state) => state.sensors.searchFields;
export const selectFilterSensors = (state) => {
  return FilterObjectList(state.sensors.sensors, state.sensors.filterSensor);
};
export const selectSearchSensors = createSelector(
  [selectAllSensors, selectSearchFields],
  (sensors, searchFields) => {
    return sensors.filter((dataItem) => {
      return searchFields.some((searchField) => {
        const { group, value } = searchField;
        return dataItem[group] == value;
      });
    });
  }
);


export const {
  setList,
  addToList,
  updateList,
  deleteItem,
  setFilterSensor,
  setSearchFields,
} = sensorsSlice.actions;
export default sensorsSlice.reducer;
