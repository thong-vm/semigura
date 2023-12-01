import sensorReducer, {
  setList,
  addToList,
  updateList,
  deleteItem,
} from "./sensorSlice";
describe("sensorSlice", () => {
  // const testSensors = [
  //   {
  //     id: "105c5364e79b2001243f71c6dc7b5a05",
  //     code: "7230B1TES1",
  //     name: "NAMEAAA",
  //     type: 1,
  //     factory: "FACTORYAAA",
  //     tank: "TANKAAA",
  //   },
  //   {
  //     id: "105c5364e79b2001243f71c6dc7b5a06",
  //     code: "7230B1TES2",
  //     name: "NAMEAAB",
  //     type: 1,
  //     factory: "FACTORYAAA",
  //     tank: "TANKAAB",
  //   },
  //   {
  //     id: "105c5364e79b2001243f71c6dc7b5a07",
  //     code: "7230B1TES3",
  //     name: "NAMEAAC",
  //     type: 1,
  //     factory: "FACTORYAAA",
  //     tank: "TANKAAC",
  //   },
  // ];
  // const testAddSensorItem = {
  //   id: "105c5364e79b2001243f71c6dc7b5a08",
  //   code: "7230B1TES4",
  //   name: "NAMEA1AA",
  //   type: 2,
  //   factory: "FACTO1YAAA",
  //   tank: "TAN1AAA",
  // };
  // const testUpdateSensorItem = {
  //   id: "105c5364e79b2001243f71c6dc7b5a05",
  //   code: "1230B1TES4",
  //   name: "NAMEA1A2",
  //   type: 1,
  //   factory: "FACTO1YAA1",
  //   tank: "TAN1AA2",
  // };
  // const testDeleteSensorItem = {
  //   id: "105c5364e79b2001243f71c6dc7b5a05",
  //   code: "7230B1TES1",
  //   name: "NAMEAAA",
  //   type: 1,
  //   factory: "FACTORYAAA",
  //   tank: "TANKAAA",
  // };

  const initialState = {
    sensors: [],
  };

  it("should handle initial state", () => {
    expect(sensorReducer(undefined, { type: "unknown" })).toEqual({
      sensors: [],
    });
  });

  it("should handle set list", () => {
    const sensors = [
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
    const beforeSetListSensors = [];
    const afterSetListSensors = [
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
    expect(initialState.sensors).toEqual(beforeSetListSensors);
    const actual = sensorReducer(initialState, setList({ sensors }));
    expect(actual.sensors).toEqual(afterSetListSensors);
  });

  it("should handle add to list", () => {
    const id = "105c5364e79b2001243f71c6dc7b5a08";
    const sensor = {
      id: "105c5364e79b2001243f71c6dc7b5a08",
      code: "7230B1TES4",
      name: "NAMEA1AA",
      type: 2,
      factory: "FACTO1YAAA",
      tank: "TAN1AAA",
    };
    const beforeAddSensors = [];
    const afterAddSensors = [
      {
        id: "105c5364e79b2001243f71c6dc7b5a08",
        code: "7230B1TES4",
        name: "NAMEA1AA",
        type: 2,
        factory: "FACTO1YAAA",
        tank: "TAN1AAA",
      },
    ];
    expect(initialState.sensors).toEqual(beforeAddSensors);
    const actual = sensorReducer(initialState, addToList({ sensor }));
    expect(actual.sensors.find((x) => x.id === id)).toEqual(sensor);
    expect(actual.sensors).toEqual(afterAddSensors);
  });

  it("should handle update sensor", () => {
    const id = "105c5364e79b2001243f71c6dc7b5a05";
    const changes = {
      id: "105c5364e79b2001243f71c6dc7b5a05",
      code: "1230B1TES4",
      name: "NAMEA1A2",
      type: 1,
      factory: "FACTO1YAA1",
      tank: "TAN1AA2",
    };
    const org = {
      id: "105c5364e79b2001243f71c6dc7b5a05",
      code: "7230B1TES1",
      name: "NAMEAAA",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAA",
    };

    const beforeUpdateSensors = [
      {...org},
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

    const afterUpdateSensors = [
      {...changes},
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
    initialState.sensors = beforeUpdateSensors;
    expect(org).not.toEqual(changes);
    expect(initialState.sensors.find((x) => x.id === id)).toEqual(org);
    const actual = sensorReducer(initialState, updateList({ id, sensor: changes }));
    expect(actual.sensors.find((x) => x.id === id)).toEqual(changes);
    expect(actual.sensors).toEqual(afterUpdateSensors);
  });

  it("should handle delete sensor", () => {
    const deletedSensor = {
      id: "105c5364e79b2001243f71c6dc7b5a05",
      code: "7230B1TES1",
      name: "NAMEAAA",
      type: 1,
      factory: "FACTORYAAA",
      tank: "TANKAAA",
    };
    const id = "105c5364e79b2001243f71c6dc7b5a05";
    const beforeDeleteSensors = [
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
    const afterDeleteSensors = [
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
    initialState.sensors = beforeDeleteSensors;
    expect(initialState.sensors.find((x) => x.id === id)).toEqual(
      deletedSensor
    );
    const actual = sensorReducer(initialState, deleteItem({ id }));
    expect(actual.sensors).toEqual(afterDeleteSensors);
  });
});
