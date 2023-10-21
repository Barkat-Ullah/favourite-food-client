
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FoodCard from "../FoodCard/FoodCard";

import Gallery from "../Gallery/Gallery";
import Worker from "../FoodWorker/Worker";
import Client from "../Client/Client";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const foodData = useLoaderData();
    console.log(foodData);



    return (
        <div>
          <Banner></Banner>
         <div className="bg-[#F4F3F0] ">
              <div className="pt-10">
                    <h2 className="text-2xl lg:text-4xl text-center pt-5 pb-2 text-slate-600 font-semibold">All in <span className="text-[#C5A35E]">One</span></h2>
                    <p className="text-center text-slate-600 pt-3 pb-2">Our food menu is a testament to our commitment to culinary excellence. </p>
              </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
             {
               foodData.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
             }
           </div>
         </div>

        <Gallery></Gallery>
        <Worker></Worker>
        <Client></Client>
        <Contact></Contact>    

        </div>
    );
};

export default Home;

// import React from "react";
// import Banner from "../Banner/Banner";
// import Contact from "../Contact/Contact";
// import FoodCard from "../FoodCard/FoodCard";
// import Gallery from "../Gallery/Gallery";
// import Worker from "../FoodWorker/Worker";
// import Client from "../Client/Client";
// import { useLoaderData } from "react-router-dom";

// const Home = () => {
//   const foodData = useLoaderData();
//   console.log(foodData);

//   return (
//     <div>
//       <Banner></Banner>
//       <div className="bg-[#F4F3F0]">
//         <div className="pt-10">
//           <h2 className="text-2xl lg:text-4xl text-center pt-5 pb-2 text-slate-600 font-semibold">
//             All in <span className="text-[#C5A35E]">One</span>
//           </h2>
//           <p className="text-center text-slate-600 pt-3 pb-2">
//             Our food menu is a testament to our commitment to culinary excellence.
//           </p>
//         </div>
//         {foodData.length === 0 ? (
     
//           <div className="text-center text-red-500">No Data Found</div>
//         ) : (
         
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {foodData.map((food) => (
//               <FoodCard key={food._id} food={food}></FoodCard>
//             ))}
//           </div>
//         )}
//       </div>

//       <Gallery></Gallery>
//       <Worker></Worker>
//       <Client></Client>
//       <Contact></Contact>
//     </div>
//   );
// };

// export default Home;
