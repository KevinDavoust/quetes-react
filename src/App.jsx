import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const decrementPokemonIndex = () => setPokemonIndex(pokemonIndex - 1);

  const incrementPokemonIndex = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={decrementPokemonIndex}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={incrementPokemonIndex}>Suivant</button>
      )}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  );
}

export default App;
