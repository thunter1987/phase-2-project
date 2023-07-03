import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

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
        setPokémonData(response.data.results.map(pokemon => <p key={ pokemon }>pokemon.name</p>));
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
      <Pagination
        gotoNextPage={ nextPageUrl ? gotoNextPage : null }
        gotoPrevPage={ prevPageUrl ? gotoPrevPage : null }
      />
      <ul>
        {pokémonData}
      </ul>
    </div>
  );
}

export default PokémonList;
