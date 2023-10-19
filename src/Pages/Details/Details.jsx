import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsPage = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    detailsPage;

  return (
 
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col space-y-3">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{category}</p>
          <p>{supplier}</p>

          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
            />
          </div>

          <Link to={`/food/${_id}`}>
          <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span className="text-blue-500">Go back</span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
