/* eslint-disable no-unused-vars */
import React from "react";

function DeletePartFromList({ onDeleteClick }) {
  return (
    <>
      <button onClick={(id) => onDeleteClick(id)}>Delete This Part</button>
    </>
  );
}

export default DeletePartFromList;
