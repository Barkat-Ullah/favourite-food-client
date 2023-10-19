import Client from "../Client/Client";
import Worker from "../FoodWorker/Worker";
import Gallery from "../Gallery/Gallery";


const Blog = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Worker></Worker>
            <Client></Client>
        </div>
    );
};

export default Blog;