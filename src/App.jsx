import { useState, useEffect } from "react";
import "./styles/App.css";
import getPokemonsList from "./pokemon";
import CardHolder from "./components/CardHolder";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemonsList().then(setPokemons);
  }, []);

  if (pokemons.length === 0) return <h1>Loading!</h1>;
  return <CardHolder data={pokemons} />;
}

export default App;
