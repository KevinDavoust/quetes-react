import PropTypes from "prop-types";
const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
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
    </>
  );
};

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired
  ),
};

export default NavBar;
