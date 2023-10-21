import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";


const MyCart = () => {
    const myCards = useLoaderData()
    const [removes, setRemoves] = useState(myCards)
    console.log(myCards);
    return (
        <div className="my-32">
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    removes.map(card => <Card key={card._id}
                    removes={removes} setRemoves={setRemoves}
                    card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default MyCart;