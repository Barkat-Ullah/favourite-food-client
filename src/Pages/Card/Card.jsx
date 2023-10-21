// import { useState } from "react";
import Swal from "sweetalert2";


const Card = ({card, removes, setRemoves}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } =
    card;
    // const [removes, setRemoves] = useState(card)
    console.log(card);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://food-auth-server-ffp980d4i-barkat-ullah.vercel.app/client/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = removes.filter(remove => remove._id !== id)
                            console.log(remaining);
                            setRemoves(remaining)
                        }
                    })

            }
        })
    }
    // const handleDelete = _id => {
    //     console.log(_id); 
        
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             console.log(`Deleting product with ID: ${_id}`);
                
    //             fetch(`https://food-auth-server-ffp980d4i-barkat-ullah.vercel.app/foods/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => {
    //                     console.log('Delete Response:', res); // Log the response.
    //                     return res.json();
    //                 })
    //                 .then(data => {
    //                     console.log('Delete Result:', data); // Log the result.
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Product has been deleted.',
    //                             'success'
    //                         );
    //                         const remaining = removes.filter(remove => remove._id !== _id);
    //                         setRemoves(remaining);
    //                     }

    //                 })
    //                 .catch(error => {
    //                     console.error('Delete Error:', error); // Log any errors.
    //                 });
    //         }
    //     });
    // }
    
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
     
        <div className="flex justify-end p-6 pt-0">
          <button
          onClick={() => handleDelete(_id)}
           className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-slate-100 duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#f5bd4f] hover:bg-[#a1741a] focus:bg-[#826c41] disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Deleted A Product</span>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Card;