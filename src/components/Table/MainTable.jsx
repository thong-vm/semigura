import React from "react";
import "./Table.css";


const MainTable = ({ columnNames, data }) => {
  return (
    <div className="container table_wrapper">
      {/* Table Head */}
      <table className="main_table">
        <thead>
          <tr>
            <th>No.</th>
            {columnNames.map((column, index) => (
              <th key={index}>{column.toUpperCase()}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map((dataRow, rowIndex) => (
            <tr key={dataRow["id"]}>
              <td className="tablerow_no">{rowIndex + 1}</td>
              {columnNames.map((column, columnIndex) => (
                <td key={columnIndex}>{dataRow[column]}</td>
              ))}
              <td>
                <button >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
