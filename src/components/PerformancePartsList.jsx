import React, { useState, useEffect } from "react";
import DeletePartFromList from "./DeletePartFromList";
import { url } from "../constants";

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);

  //renders list on Parts List Page
  useEffect(() => {
    fetch(url.parts)
      .then((response) => response.json())
      .then((data) => setPerformanceParts(data));
  }, []);

  function handleDelete(id) {
    //fetch using passed in param of "id" to choose a specific item to delete.
    fetch(`${url.parts}/${id}`, { method: "DELETE" });
    //filters parts list to update what is shown on the screen after delete method.
    const filteredParts = performanceParts.filter((part) => part.id !== id);
    //updates the state of list
    setPerformanceParts(filteredParts);
  }

  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map((part) => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <DeletePartFromList onDeleteClick={() => handleDelete(part.id)} />
          <p>{part.description}</p>
          <p>Manufacturer: {part.manufacturer}</p>
          <p>Price: ${part.price}</p>
          <img src={part.image} alt='part_image' />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PerformancePartsList;
