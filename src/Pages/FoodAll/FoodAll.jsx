import { useLoaderData } from "react-router-dom";
import AllFood from "../AllFood/AllFood";

const FoodAll = () => {
  const allFoods = useLoaderData();


  return (
    <div>
      <div>
        <div className="carousel w-full h-[400px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/wJVhvnL/Chamagadda-Mutton-Pulusu.webp"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WfPbT3t/social-share-1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/F4F250T/i-Stock-525339762.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
  
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            allFoods.map(allFood => <AllFood key={allFood._id} allFood={allFood}></AllFood>)
        }
      </div>
    </div>
  );
};

export default FoodAll;
