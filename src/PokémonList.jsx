import React, { useEffect, useState } from "react";
import axios from "axios";

function PokémonList({ pokemon }) {
  const [pokémonData, setPokémonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
      setPokémonData(response.data.results);
    };
    fetchData();
  }, []);
  if(!pokémonData) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <ul>
        {pokémonData.map((pokemon) => (
            <li key={ pokemon.name }>{pokemon.name}{pokemon.hp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokémonList;
