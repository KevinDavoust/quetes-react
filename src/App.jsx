import "./App.css";
import MenuList from "./components/MenuList";
import { foodItems } from "./data";

const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      {/* pass the variable foodItems as props to MenuList component */}
      <MenuList foodItems={foodItems} />
    </article>
  );
};

export default App;
