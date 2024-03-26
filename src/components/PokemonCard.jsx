import PropTypes from "prop-types";
const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
};

/* added proptypes */
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
