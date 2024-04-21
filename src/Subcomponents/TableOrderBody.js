import React from "react";

function TableOrderBody({ tag, _id }) {
  return (
    <tr key={_id}>
      <td> {tag.orderID} </td>
      <td>{tag.type}</td>
      <td>{tag.quantity}</td>
      <td>{tag.name}</td>
      <td>{tag.shippingaddress}</td>
      <td>{tag.status}</td>
      <td>{tag.price}</td>
    </tr>
  );
}

export default TableOrderBody;
