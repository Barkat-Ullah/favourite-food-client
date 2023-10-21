import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  console.log(food);
  const {id, supplier_brand, image} = food;

  return (
    <div className="mb-5 ">

      <Link to={`/food/${supplier_brand}`}>
        <div
          className="hero h-60 rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{supplier_brand}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
