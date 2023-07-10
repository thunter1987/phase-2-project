import React, { useState, useEffect } from "react";
import DeletePartFromList from "./DeletePartFromList";
import { url } from "../constants";

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);
      
  const fetchData = async () => {
    const response = await fetch(url.parts)
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  
  useEffect(() => {
    fetchData()
      .then((res) => {
        setPerformanceParts(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  
  const handleDelete = async (id) => {
    const updatedPartsList = await fetch(`${url.parts}/${id}`,
      { method: "DELETE" } )
      setPerformanceParts(updatedPartsList)
  }
  
  useEffect(() => {
    handleDelete()
      .then((res) => {
        setPerformanceParts(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  
  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map(part => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <DeletePartFromList
            id={part.id}
            onDeleteClick={handleDelete}/>
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
