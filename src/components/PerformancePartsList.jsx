import React, { useState, useEffect } from "react";
import DeletePartFromList from "./DeletePartFromList";
import { url } from "../constants";

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);
      
  useEffect(() => {async function getPartsList() {
    const partsList = await fetch(url.parts)
    .then((r) => r.json())
      setPerformanceParts(partsList)
      getPartsList()
  }, []);
}
  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map(part => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <DeletePartFromList
            id={part.id}
            onDeleteClick={(id) => {
    const updatedPartsList = fetch(`${url.parts}/${id}`,
      { method: "DELETE" } )
     setPerformanceParts(updatedPartsList)
  }}
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
