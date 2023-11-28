import { useState, useEffect } from "react";
import {
  addToList,
  updateList,
  fetchSensors,
  selectAllSensors,
  deleteItem,
  deleteSensor,
} from "../../store/sensor/sensorSlice";
import { useDispatch, useSelector } from "react-redux";
import getListColumnsExcludeId from "../../utils/GetColumnNamesExcludeId";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Sensor.css";
import "../../components/Table/Table.css"
import MainTable from "../../components/Table/MainTable";

function Sensor() {
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState("");
  const dispatch = useDispatch();
  const listSensors = useSelector(selectAllSensors);
  const columns = listSensors.length > 0 ? getListColumnsExcludeId(listSensors[0]) : [];

  const handleAdd = () => {
    dispatch(addToList({ id: "1", title: "11" }));
  };
  const handleUpdate = () => {
    dispatch(updateList({ id: "1", title: "22" }));
  };
  const handleDelete = async (id) => {
    handleCloseModal();
    try {
      // Dispatch the deleteSensor action with the sensor data
      const deleteResult = await dispatch(deleteSensor({ id }));
      // Check if the action was fulfilled
      if (deleteSensor.fulfilled.match(deleteResult)) {
        console.log("Sensor deleted successfully: ", deleteResult.payload);
        // call for delete the item from Sensors state
        dispatch(deleteItem(deleteResult.payload));
      } else {
        console.error("Error deleting sensor: ", deleteResult.payload);
      }
    } catch (error) {
      console.error("Error dispatching deleteSensor action: ", error);
    }
  };


  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const handleClickDeleteButton = (activeId) => {
    handleShowModal();
    setActiveId(activeId);
  };

  useEffect(() => {
    dispatch(fetchSensors());
  }, [dispatch]);

  return (
    <>
      <div className="container table_wrapper">
        {/* Table Head */}
        <table className="main_table">
          <thead>
            <tr>
              <th>No.</th>
              {columns.map((column, index) => (
                <th key={index}>{column.toUpperCase()}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {listSensors.map((dataRow, rowIndex) => (
              <tr key={dataRow["id"]}>
                {/* Column STT */}
                <td className="tablerow_no">{rowIndex + 1}</td>
                {/* Map out data by column key  */}
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{dataRow[column]}</td>
                ))}
                {/* Column Action: Delete */}
                <td className="text-center">
                  <button
                    onClick={() => handleClickDeleteButton(dataRow["id"])}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <MainTable columnNames={columns} data={listSensors}/> */}
      {/* Delete Confirmation Modal */}
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Sensor?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Sensor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(activeId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div>
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
      ))} */}
    </>
  );
}
export default Sensor;
