function Card({ pokemon, click }) {
  return (
    <div className="card" onClick={() => click(pokemon.id)}>
      <img src={pokemon.img} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
}

export default Card;
