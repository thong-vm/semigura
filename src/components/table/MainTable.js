import React from "react";
import "./Table.css";
import TableHead from "./TableHead";

const MainTable = ({ columnNames, data }) => {
  return (
    <div className="container table_wrapper">
      <table className="main_table">
        {/* Table Head */}
        <TableHead columns={columnNames} />
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
