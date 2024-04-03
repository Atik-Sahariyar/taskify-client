import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Root from "../Layout/Root";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import TaskCreationPage from "../Dashboard/TaskCreatePage";
import AllTasks from "../Dashboard/AllTasks";
import MyTask from "../Dashboard/MyTasks";
import UpdateTask from "../Dashboard/UpdateTask";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
 
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  //   dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllTasks />,
      },
      {
        path: "taskCreate",
        element: <TaskCreationPage />,
      },
    
      {
        path: "updateTask/:id",
        element: <UpdateTask />,
      },
      {
        path: "myTasks",
        element: <MyTask />,
      },
    ],
  },
]);

export default router;
