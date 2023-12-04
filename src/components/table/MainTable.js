import React from "react";
import "./Table.css";
import TableHead from "./TableHead";
import TableCellInput from "./TableCellInput";

const MainTable = ({ columnNames, data }) => {
  return (
    <div className="container table_wrapper">
      <table className="main_table">
        <TableHead columns={columnNames} />
        <tbody>
          {data.map((dataRow, rowIndex) => (
            <tr key={dataRow["id"]}>
              <td className="tablerow_no">{rowIndex + 1}</td>
              {columnNames.map((column, columnIndex) => (
                <TableCellInput key={columnIndex} value={dataRow[column]} />
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
