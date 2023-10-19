import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorElement/ErrorPage";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Blog from "../Pages/Blog/Blog";
import FoodAll from "../Pages/FoodAll/FoodAll";
import Update from "../Pages/Update/Update";


const router = createBrowserRouter([

    {
        path : '/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
             
            },
            {
                path:'/food/:id',
                element:<FoodAll></FoodAll>,
                loader:() => fetch('http://localhost:5000/foods')
            },
            {
                path:'/foods/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>,
                loader:() => fetch('http://localhost:5000/foods')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }

]);

export default router;