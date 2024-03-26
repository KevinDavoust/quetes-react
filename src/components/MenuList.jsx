import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {/* render a MenuItem component to each element of the props array */}
      {foodItems.map((foodItem) => (
        <MenuItem key={foodItem.itemName} foodItem={foodItem} />
      ))}
    </>
  );
}

MenuList.propTypes = {
  foodItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string,
      description: PropTypes.string,
      foodImage: PropTypes.string,
      price: PropTypes.number,
    }).isRequired
  ),
};

export default MenuList;
