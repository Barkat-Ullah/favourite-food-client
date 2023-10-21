import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const detailsPage = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    detailsPage;

  const newId = { name, quantity, supplier, taste, category, details, photo }

    const navigate = useNavigate()

    const handleAdd = () => {

      fetch('http://localhost:5000/client', {
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newId)
    })
    .then(res => res.json())
    .then(data => {
        
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Item successfully added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    }
  

  return (
 
 <div className="">
     <div className="hero  bg-[#F4F3F0]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="w-96 h-56 rounded-lg " />
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

          <div className="flex justify-center items-center space-x-2">
          <button onClick={handleAdd} className="btn btn-warning">Add to Cart</button>
          <button  onClick={() => navigate(-1)} className="btn btn-outline btn-warning">Go Back</button>

          </div>
       
        </div>
      </div>
    </div>
 </div>
  );
};

export default Details;
