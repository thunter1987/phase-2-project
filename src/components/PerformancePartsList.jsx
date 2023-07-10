import React, { useState, useEffect } from "react";
import DeletePartFromList from "./DeletePartFromList";
import { url } from "../constants";

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);
      
  useEffect(async function getPartsList() {
    const partsList = await fetch(url.parts)
    .then((r) => r.json())
      setPerformanceParts(partsList)
      }
      getPartsList()
  }, []);

  const handleDelete = (id) => {
    const config = { method: "DELETE" };
    fetch(`${url.parts}/${id}`, config)
    .then(partsData => setPerformanceParts(partsData));
  };

  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map(part => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <DeletePartFromList
            id={part.id}
            onDeleteClick={(id) => handleDelete(id)}
          />
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
