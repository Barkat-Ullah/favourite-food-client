// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodCard from "../FoodCard/FoodCard";
import { useEffect, useState } from "react";


const Home = () => {

    // const foods = useLoaderData();
    const [foodData, setFoodData] = useState([]);
     
    useEffect(() => {
        fetch('/company.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFoodData(data)
        })
    } ,[])

    return (
        <div>
          <Banner></Banner>
         <div className="bg-[#F4F3F0]">
              <div className="mt-10">
                    <h2 className="text-5xl text-center pt-5 pb-2 text-slate-800 font-semibold">VIEW OUR <span className="text-[#C5A35E]">MENU</span></h2>
                    <p className="text-center text-slate-600 pt-3 pb-2">Our food menu is a testament to our commitment to culinary excellence. </p>
              </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
               foodData.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
             }
           </div>
         </div>
        </div>
    );
};

export default Home;