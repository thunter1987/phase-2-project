import React from "react";
import "./App.css";
import Home from "./Home";
import PokémonList from "./PokémonList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.stats[3].base_stat
        });
      }
    );
    console.log(pokemon);
  };

  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemon">Pokémon List</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
      <Home />
      <PokémonList />
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
