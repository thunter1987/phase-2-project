import React from "react";
import PerformancePartsList from "./PerformancePartsList";

function DeletePartFromList({ id }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/performanceParts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error); // Handle any errors
      });
    return { PerformancePartsList };
  };
  return (
    <>
      <button onClick={() => handleDelete(id)}>Delete This Part</button>
    </>
  );
}

export default DeletePartFromList;
