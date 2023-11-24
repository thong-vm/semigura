import { useEffect } from "react";
import {
  addToList,
  updateList,
  fetchSensors,
  selectAllSensors,
  deleteItem,
} from "../../store/sensor/sensorSlice";
import { useDispatch, useSelector } from "react-redux";
function Sensor() {
  const dispatch = useDispatch();
  const sensors = useSelector(selectAllSensors);

  const handleAdd = () => {
    dispatch(addToList({ id: "1", title: "11" }));
  };
  const handleUpdate = () => {
    dispatch(updateList({ id: "1", title: "22" }));
  };
  const handleDelete = () => {
    dispatch(deleteItem({ id: "1", title: "22" }));
  };
  useEffect(() => {
    dispatch(fetchSensors());
  }, [dispatch]);
  return (
    <>
      <div>
        id: <input type="text" />
        title: <input type="text" />
        <button onClick={() => handleAdd()}>Add</button>
      </div>
      <div>
        id: <input type="text" />
        title: <input type="text" />
        <button onClick={() => handleUpdate()}>Update</button>
      </div>
      <div>
        id: <input type="text" />
        title: <input type="text" />
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
      {sensors.map((x, i) => (
        <div key={i}>{JSON.stringify(x)}</div>
      ))}
    </>
  );
}
export default Sensor;
