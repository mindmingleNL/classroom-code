import { Fruit } from "../pages/index";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  return (
    <li className="fruit-item">
      <div className="fruit-box">
        <h3>{fruit.name}!</h3>
        <p>Organic:{fruit.isOrganic ? "✅" : "👎"}</p>
        <p>Price: {fruit.price}</p>
        <p>Taste: {fruit.taste}</p>
        <button>💰BUY NOW</button>
      </div>
    </li>
  );
};

export default FruitItem;
