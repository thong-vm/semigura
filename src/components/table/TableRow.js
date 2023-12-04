import React from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TableRow = ({ index, columns, data, handleUpdateOnBlur, handleClickDelete }) => {
  const handleOnBlur = (column, data, inputValue) => {
    let updateData;
    if(data[column] !== inputValue){
      updateData = { ...data };
      updateData[column] = inputValue;
      handleUpdateOnBlur(updateData);
    }
  }

  return (
    <tr>
      <td className="tablerow_no">{index + 1}</td>
      {columns.map((column, columnIndex) => (
        <td key={columnIndex}>
          <input
            className="cell-input"
            type="text"
            defaultValue={data[column]}
            onBlur={(e) => handleOnBlur(column, data, e.target.value)}
          ></input>
        </td>
      ))}
      <td className="text-center">
        <IconButton aria-label="delete" color="error"
          onClick={() => handleClickDelete(data.id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default TableRow;
