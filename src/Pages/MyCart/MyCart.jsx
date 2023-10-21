import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const MyCart = () => {
    const myCards = useLoaderData()
    const {user} = useContext(AuthContext)

    const userCards = myCards.filter(card => card.user == user.email)
    const [removes, setRemoves] = useState(userCards)
    console.log(userCards);
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