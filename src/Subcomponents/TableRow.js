import React from "react";

function TableRow({ data }) {
  return (
    <tr key={data.id}>
      <td>{data.date}</td>
      <td>{data.salesrevenue}</td>
      <td>{data.costofgoods}</td>
      <td>{data.grossprofit}</td>
    </tr>
  );
}

export default TableRow;
