import React from "react";
import * as STRING from "../../constants/string";

const TableRowNoData = ({ colSpan }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center py-2 table-row-nodata">
        {STRING.TABLE.NO_DATA}
      </td>
    </tr>
  );
};

export default TableRowNoData;
