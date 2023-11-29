import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        <th>No.</th>
        {columns.map((column, index) => (
          <th key={index}>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;
