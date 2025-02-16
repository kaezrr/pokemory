import { useState, useEffect } from "react";
import getPokemonsList from "../pokemon";

import "../styles/App.css";

import CardHolder from "./CardHolder";
import TitleScore from "./TitleScore";

const clicked = new Set();

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [scoreData, setScore] = useState({ score: 0, maxScore: 0 });

  useEffect(() => {
    getPokemonsList().then(setPokemons);
  }, []);

  function updateScore(clickedId) {
    const newScore = { ...scoreData };
    if (!clicked.has(clickedId)) {
      clicked.add(clickedId);
      newScore.score++;
    } else {
      newScore.maxScore = Math.max(scoreData.maxScore, newScore.score);
      newScore.score = 0;
      clicked.clear();
    }
    setScore(newScore);
  }

  if (pokemons.length === 0) return <h1>Loading!</h1>;
  return (
    <>
      <TitleScore data={scoreData} />
      <CardHolder data={pokemons} update={updateScore} />
    </>
  );
}

export default App;
