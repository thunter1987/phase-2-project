import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",

  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
        });
      }
    );
    console.log(pokemon);
  };
  return (
    <div className='App'>
      <div className="SearchBar">
      <h1>Pokemon Info</h1>
      <input
        className="pokemon-search-input"
        type='text'
        onChange={(event) => setPokemonName(event.target.value)}/>
      <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
