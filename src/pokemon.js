async function getRandomPokemon(id) {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  let data = await response.json();
  return {
    id,
    name: data.name,
    img: data.sprites.other["official-artwork"].front_default,
  };
}

async function getPokemonList(length = 15) {
  const randID = () => Math.floor(Math.random() * 1025) + 1;
  const pokemonIDs = new Set();
  while (pokemonIDs.size < length) pokemonIDs.add(randID());
  return Promise.all([...pokemonIDs].map(getRandomPokemon));
}

export default getPokemonList;
