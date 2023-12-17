import { useState, useEffect } from "react";
import {
  addToList,
  updateList,
  fetchSensors,
  selectAllSensors,
  deleteItem,
  addSensor,
  deleteSensor,
  updateSensor,
  setFilterSensor,
  selectFilterSensors,
} from "../../store/sensor/sensorSlice";
import { useDispatch, useSelector } from "react-redux";
import getListColumnsExcludeId from "../../utils/GetColumnNamesExcludeId";
import ExtractUniqueValuesForSensor from "../../utils/ExtractUniqueValuesForSensor";
import "./Sensor.css";
import "../../components/table/Table.css";
import DeleteModal from "../../components/ui/DeleteModal";
import TableRow from "../../components/table/TableRow";
import TableRowAdd from "../../components/table/TableRowAdd";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import TableRowNoData from "../../components/table/TableRowNoData";
import TableHead from "../../components/table/TableHead";
import SeachPanelAutoComplete from "../../components/searchPanel/SeachPanelAutoComplete";
import CustomizedHook from "../../components/searchPanel/AutoCompleteHook";

function Sensor() {
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState("");
  const dispatch = useDispatch();
  const listSensors = useSelector(selectAllSensors);
  const columns =
    listSensors.length > 0 ? getListColumnsExcludeId(listSensors[0]) : [];
  const SelectValues = ExtractUniqueValuesForSensor(listSensors);
  const listFilterSensors = useSelector(selectFilterSensors);

  const handleAdd = async (sensor) => {
    try {
      const addResult = await dispatch(addSensor(sensor));
      if (addSensor.fulfilled.match(addResult)) {
        console.log("Sensor added successfully: ", addResult.payload);
        dispatch(addToList({ sensor: addResult.payload }));
      } else {
        console.error("Error adding sensor: ", addResult.payload);
      }
    } catch (error) {
      console.error("Error dispatching addSensor action: ", error);
    }
  };
  const handleUpdate = async (sensor) => {
    try {
      const updateResult = await dispatch(updateSensor(sensor));
      if (updateSensor.fulfilled.match(updateResult)) {
        console.log("Sensor updated successfully: ", updateResult.payload);
        dispatch(updateList({ sensor: updateResult.payload }));
      } else {
        console.error("Error updating sensor: ", updateResult.payload);
      }
    } catch (error) {
      console.error("Error dispatching updateSensor action: ", error);
    }
  };
  const handleDelete = async (id) => {
    handleCloseModal();
    try {
      const deleteResult = await dispatch(deleteSensor({ id }));
      if (deleteSensor.fulfilled.match(deleteResult)) {
        console.log("Sensor deleted successfully: ", deleteResult.payload);
        dispatch(deleteItem(deleteResult.payload));
      } else {
        console.error("Error deleting sensor: ", deleteResult.payload);
      }
    } catch (error) {
      console.error("Error dispatching deleteSensor action: ", error);
    }
  };

  const handleClickDelete = (activeId) => {
    handleShowModal();
    setActiveId(activeId);
  };

  const handleSearchForm = (data) => {
    // console.log(data);
    dispatch(setFilterSensor(data));
  };

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  useEffect(() => {
    dispatch(fetchSensors());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5">
        {/* <SearchPanel
          typeList={SelectValues.typeList}
          factoryList={SelectValues.factoryList}
          tankList={SelectValues.tankList}
          onSubmit={handleSearchForm}
        /> */}
        <SeachPanelAutoComplete data={listSensors} />
        <CustomizedHook />
      </div>
      <div className="container table_wrapper mt-4">
        <table className="main_table">
          <TableHead columns={columns}/>
          <tbody>
            {listFilterSensors.length === 0 ? (
              <TableRowNoData colSpan={columns.length + 2} />
            ) : (
              <>
                {listFilterSensors.map((dataRow, rowIndex) => (
                  <TableRow
                    key={dataRow.id}
                    index={rowIndex}
                    columns={columns}
                    data={dataRow}
                    handleUpdateOnBlur={handleUpdate}
                    handleClickDelete={handleClickDelete}
                  />
                ))}
                <TableRowAdd columns={columns} onClickAdd={handleAdd} />
              </>
            )}
          </tbody>
        </table>
      </div>
      <DeleteModal
        show={show}
        handleCloseModal={handleCloseModal}
        onDeleteClick={() => handleDelete(activeId)}
      />
    </>
  );
}
export default Sensor;
