
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";


const AddProduct = () => {
    const {user} = useContext(AuthContext)

    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
       
        const newFood = {user : user?.email ,name, quantity, supplier, taste, category, details, photo}
        console.log(newFood);

        fetch('https://food-auth-server-ffp980d4i-barkat-ullah.vercel.app/client', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newFood)
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
        <div>
            <div className="bg-[#F4F3F0] pt-2 pl-2">
                
            <Link to= "/">
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
            
        <div className="form-control">
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl text-center text-slate-600 font-extrabold">Add a Yummy food or <span className="text-[#C5A35E]">Cold Drinks</span></h2>
                <p className="text-center text-slate-700 mt-4">Indulge in the rich, savory flavors of our garlic butter shrimp pasta. Plump shrimp, al dente pasta, coca-cola, pepsi and a velvety garlic butter sauce create a culinary masterpiece thats simply irresistible.</p>

                <form onSubmit={handleAddFood}>
                   
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="quantity" placeholder="Available Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                  
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="supplier" placeholder="Brand Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="taste" placeholder="Items Type" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="category" placeholder="Description" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="details" placeholder="Rating" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                  
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <div className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Your Favorite Food" className="btn btn-warning w-full text-slate-500" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;