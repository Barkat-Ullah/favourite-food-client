import { Link, useParams } from "react-router-dom";

const AllFood = ({ allFood }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    allFood;
  const {supplier_brand} = useParams()
  console.log(supplier_brand);

  return (
    <div>
      <div className="rounded-xl bg-white shadow-md text-slate-500 shadow-slate-200">
        <figure className="flex items-center justify-center rounded-t-xl bg-black">
          <img
            src={photo}
            alt="card image"
            className="aspect-video w-52 h-[180px] py-4"
          />
        </figure>

        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">{name}</h3>
            <p className=" text-slate-400">{taste} </p>
            <p className=" text-slate-400">Price : {quantity} </p>
          </header>
          <h2>
            <span className="link link-hove no-underline text-yellow-900 font-semibold">
              {" "}
              {supplier}
            </span>
          </h2>
          <p>Rating : {details}</p>
        </div>
      <div className="flex justify-between items-center">
      <div className="flex w-full p-6 pt-0">
        <Link to={`/update/${supplier_brand}/${_id}`}>          
            <button className="btn btn-outline btn-warning w-full">
              Update
            </button>
        </Link>

        </div>
        <div className="flex justify-end p-6 pt-0">
        <Link to={`/details/${supplier_brand}/${_id}`}>
        <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-5 text-sm font-medium tracking-wide text-slate-100 duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#f5bd4f] hover:bg-[#a1741a] focus:bg-[#826c41] disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Details</span>
          </button>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AllFood;
