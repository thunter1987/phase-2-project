import React, { useState } from "react";
import { url } from "../constants";

function PerformancePartForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    manufacturer: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url.parts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error); // Handle any errors
      });
    //resets form to blank after submission
    setFormData({
      name: "",
      description: "",
      price: 0,
      manufacturer: "",
      image: null,
    })
  };

  return (
    <div>
    <h1>Add a New Performance Part</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type='number'
          name='price'
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Manufacturer:
        <input
          type='text'
          name='manufacturer'
          value={formData.manufacturer}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input type='file' name='image' onChange={handleChange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
    </div>
  );
}

export default PerformancePartForm;
