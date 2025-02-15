async function getRandomPokemon() {
  const randID = () => Math.floor(Math.random() * 1025) + 1;
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randID());
  let data = await response.json();
  return data.name;
}

async function getPokemonList(length = 15) {
  return Promise.all(Array.from({ length }, getRandomPokemon));
}

export default getPokemonList;
