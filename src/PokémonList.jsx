import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PokémonList() {
  const [pokémonData, setPokémonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
      setPokémonData(response.data.results);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {pokémonData.map((pokemon) => (
          <li key={pokemon.name}>
            <Link>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokémonList;
