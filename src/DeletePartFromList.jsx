import React from "react";

function DeletePartFromList(id) {
  const handleDelete = () => {
    fetch(`http://localhost:3001/performanceParts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  };
  return (
    <>
      <button onClick={() => handleDelete()}>Delete This Part</button>
    </>
  );
}

export default DeletePartFromList;
