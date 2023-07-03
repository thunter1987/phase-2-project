import React, { useEffect, useState } from "react";
import axios from "axios";

function PokémonList({ pokemon }) {
  const [pokémonData, setPokémonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((response) => {
      setLoading(false);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      setPokémonData(response.data.results.map((pokemon) => pokemon.name));
    });
  }, [currentPageUrl]);
  if (loading) return "Loading...";

  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokémonList;
