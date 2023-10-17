import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            
        <div className="form-control">
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl text-center text-slate-800 font-extrabold">Add a Yummy food or <span className="text-[#C5A35E]">Cold Drinks</span></h2>
                <p className="text-center text-slate-700 mt-4">Indulge in the rich, savory flavors of our garlic butter shrimp pasta. Plump shrimp, al dente pasta, coca-cola, pepsi and a velvety garlic butter sauce create a culinary masterpiece thats simply irresistible.</p>

                <form onSubmit={handleAddCoffee}>
                   
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
                    <input type="submit" value="Add Coffee" className="btn btn-warning w-full text-slate-500" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;