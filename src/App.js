import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemonList(data));
  });
  return (
    <div className='App'>
      { pokemonList.map(pokemon => <li> pokemon </li>) }
    </div>
  );
}

export default App;
