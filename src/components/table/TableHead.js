import React from "react";
import * as STRING from "../../constants/string";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        <th>{STRING.TABLE.NUMBER}</th>
        {columns.map((column, index) => (
          <th key={index}>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
        ))}
        <th>{STRING.TABLE.ACTIONS}</th>
      </tr>
    </thead>
  );
};

export default TableHead;
