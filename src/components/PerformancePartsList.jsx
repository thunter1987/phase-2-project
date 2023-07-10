import React, { useState, useEffect } from "react";
import DeletePartFromList from "./DeletePartFromList";
import {url} from "../constants";

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);

  useEffect(() => {
    fetch(url.parts)
      .then((r) => r.json())
      .then((partsData) => setPerformanceParts(partsData));
  }, []);

  // const handleDelete = async (id) => {
    // const config = { method: "DELETE" };
    // const response = await fetch(`${url.parts}/${id}`, config)
    // .catch ((error) => {
    //     console.error(error); // Handle any errors
    //   }
    // );
    // const filterParts = part.filter;
    // return { PerformancePartsList };
  // };

  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map((part) => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <DeletePartFromList onDeleteClick={handleDelete} id={part.id} />
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
