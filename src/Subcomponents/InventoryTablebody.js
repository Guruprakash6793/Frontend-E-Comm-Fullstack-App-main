import React from "react";

function InventoryTablebody({ data, _id }) {
  // console.log(data)
  return (
    <tr key={_id}>
      <td>{data.date}</td>
      <td>{data.category}</td>
      <td>{data.quantity}</td>
      <td>{data.purchaseprice}</td>
      <td>{data.totalamount}</td>
      <td>{data.stocks}</td>
    </tr>
  );
}

export default InventoryTablebody;
