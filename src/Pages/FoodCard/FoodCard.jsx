import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  console.log(food);
  const {id, name, image} = food;

  return (
    <div className="mb-5">

      <Link to={`/food/${id}`}>
        <div
          className="hero h-72 "
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
