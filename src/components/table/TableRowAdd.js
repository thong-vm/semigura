import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const TableRowAdd = ({ columns, onClickAdd }) => {
  const [newSensor, setNewSensor] = useState({
    code: "",
    name: "",
    type: null,
    factory: "",
    tank: "",
  });

  const updateValue = (column, value) => {
    newSensor[column] = value;
  };

  const handleAdd = (newData) => {
    onClickAdd(newData);
    setNewSensor({
      code: "",
      name: "",
      type: null,
      factory: "",
      tank: "",
    });

  }

  useEffect(() => {
    
  }, [newSensor]);

  return (
    <tr>
      <td className="tablerow_no">#</td>
      {columns.map((column, columnIndex) => (
        <td key={columnIndex}>
          <input
            className="cell-input cell-input-add"
            type="text"
            placeholder={column}
            id={column}
            onChange={(e) => updateValue(column, e.target.value)}
          ></input>
        </td>
      ))}
      <td className="text-center">
        <Button variant="contained" size="small" onClick={() => handleAdd(newSensor)}>
          Add
        </Button>
      </td>
    </tr>
  );
};

export default TableRowAdd;
