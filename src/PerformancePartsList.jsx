import React, { useState, useEffect } from 'react';
import DeletePartFromList from './DeletePartFromList';

function PerformancePartsList() {
  const [performanceParts, setPerformanceParts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/performanceParts')
      .then((response) => response.json())
      .then(data => setPerformanceParts(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Performance Parts</h1>
      {performanceParts.map((part) => (
        <div key={part.id}>
          <h3>{ part.name }</h3>
          <DeletePartFromList id={part.id} />
          <p>{part.description}</p>
          <p>Manufacturer: {part.manufacturer}</p>
          <p>Price: ${ part.price }</p>
          <img src={ part.image } alt='part_image' />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PerformancePartsList;
