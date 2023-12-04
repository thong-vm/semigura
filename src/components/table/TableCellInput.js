import React from "react";

const TableCellInput = ({ value }) => {
  return (
    <td>
      <input className="cell_input" type="text" defaultValue={value}></input>
    </td>
  );
};

export default TableCellInput;
