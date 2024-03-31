import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Root from "../Layout/Root";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ],

    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path:"/login",
        element: <Login />
    }
]);



export default router;