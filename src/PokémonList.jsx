import React, { useEffect } from 'react'
import axios from 'axios'

function PokémonList() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            console.log(response.data.results);
        }
        fetchData();
    }, []);
  return (
    <div>PokémonList</div>
  )
}

export default PokémonList