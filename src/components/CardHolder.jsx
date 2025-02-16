import { useState } from "react";
import { shuffle } from "../pokemon";

import Card from "./Card";

function CardHolder({ data, update }) {
  const [pokemonList, setPokemonList] = useState(data);
  const updateList = (clickedID) => {
    update(clickedID);
    setPokemonList(shuffle(pokemonList));
  };

  return (
    <div className="card-holder">
      {pokemonList.map((e) => (
        <Card key={e.id} pokemon={e} click={updateList} />
      ))}
    </div>
  );
}

export default CardHolder;
