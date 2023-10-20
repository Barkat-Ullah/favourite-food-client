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
import Details from "../Pages/Details/Details";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


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
                loader:() => fetch('https://food-auth-server-hyvgtpljs-barkat-ullah.vercel.app/foods')
            },
            {
                path:'/foods/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params}) => fetch(`https://food-auth-server-hyvgtpljs-barkat-ullah.vercel.app/foods/${params.id}`)
            },
            {
                path: '/details/:id', 
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-auth-server-hyvgtpljs-barkat-ullah.vercel.app/foods/${params.id}`)
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
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/myCart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:() => fetch('https://food-auth-server-hyvgtpljs-barkat-ullah.vercel.app/foods')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }

]);

export default router;