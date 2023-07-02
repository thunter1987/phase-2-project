import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        console.log(response)
      }
    );
  };
  return (
    <div className='App'>
      <h1>Pokemon Info</h1>
      <input
        className="pokemon-search-input"
        type='text'
        onChange={(event) => setPokemonName(event.target.value)}/>
      <button onClick={searchPokemon}>Search Pokemon</button>
    </div>
  );
}

export default App;
