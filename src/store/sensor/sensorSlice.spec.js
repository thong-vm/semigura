import sensorReducer, {
  setList,
  addToList,
  updateList,
  deleteItem,
} from "./sensorSlice";
describe("sensorSlice", () => {
  const testSensors = [
    {
      id: "105c5364e79b2001243f71c6dc7b5a05",
      code: "7230B1TES1",
      name: "NAMEAAA",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAA",
    },
    {
      id: "105c5364e79b2001243f71c6dc7b5a06",
      code: "7230B1TES2",
      name: "NAMEAAB",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAB",
    },
    {
      id: "105c5364e79b2001243f71c6dc7b5a07",
      code: "7230B1TES3",
      name: "NAMEAAC",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAC",
    },
  ];
  const testAddSensorItem = {
    id: "105c5364e79b2001243f71c6dc7b5a08",
    code: "7230B1TES4",
    name: "NAMEA1AA",
    type: 2,
    factory: "FACTO1YAAA",
    tank: "TAN1AAA",
  };
  const testUpdateSensorItem = {
    id: "105c5364e79b2001243f71c6dc7b5a05",
    code: "1230B1TES4",
    name: "NAMEA1A2",
    type: 1,
    factory: "FACTO1YAA1",
    tank: "TAN1AA2",
  };
  const testDeleteSensorItem = {
    id: "105c5364e79b2001243f71c6dc7b5a05",
    code: "7230B1TES1",
    name: "NAMEAAA",
    type: 1,
    factory: "FACTORYAAA",
    tank: "TANKAAA",
  };
  const testDeleteSensors = [
    {
      id: "105c5364e79b2001243f71c6dc7b5a06",
      code: "7230B1TES2",
      name: "NAMEAAB",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAB",
    },
    {
      id: "105c5364e79b2001243f71c6dc7b5a07",
      code: "7230B1TES3",
      name: "NAMEAAC",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAC",
    },
  ];
  const initialState = {
    sensors: [],
  };

  it("should handle initial state", () => {
    expect(sensorReducer(undefined, { type: "unknown" })).toEqual({
      sensors: [],
    });
  });

  it("should handle setList", () => {
    const sensors = testSensors;
    const actual = sensorReducer(initialState, setList(sensors));
    expect(actual.sensors).toEqual(testSensors);
  });

  it("should handle addToList", () => {
    const sensor = testAddSensorItem;
    const actual = sensorReducer(initialState, addToList(sensor));
    expect(actual.sensors.find((x) => x.id === sensor.id)).toEqual(
      testAddSensorItem
    );
  });

  it("should handle updateList", () => {
    const sensor = testUpdateSensorItem;
    initialState.sensors = testSensors;
    const actual = sensorReducer(initialState, updateList(sensor));
    expect(actual.sensors.find((x) => x.id === sensor.id)).toEqual(sensor);
  });
  
  it("should handle deleteItem", () => {
    const sensor = testDeleteSensorItem;
    initialState.sensors = testSensors;
    const actual = sensorReducer(initialState, deleteItem(sensor));
    expect(actual.sensors.filter((x) => x.id !== sensor.id)).toEqual(
      testDeleteSensors
    );
  });
});
