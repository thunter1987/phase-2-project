import React, { useEffect, useState } from "react";
import axios from "axios";

function PokémonList({ pokemon }) {
  const [pokémonData, setPokémonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(currentPageUrl);
      setPokémonData(response.data.results.map(pokemon => pokemon.name));
    };
    fetchData();
  }, [currentPageUrl]);
  if(!pokémonData) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
            <li key={ pokemon.name }>{pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokémonList;
