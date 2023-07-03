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
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setPokémonData(response.data.results.map((pokemon) => pokemon.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
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
