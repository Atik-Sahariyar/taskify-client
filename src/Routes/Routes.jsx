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
    element: <Dashboard />,
    children: [
      {
        path: "taskCreate",
        element: <TaskCreationPage />
      },
      {
        path: "allTasks",
        element: <AllTasks />
      },
      {
        path: "updateTask/:id",
        element: <UpdateTask />
      },
      {
        path: "myTasks",
        element: <MyTask />
      },
    ],
  },
]);

export default router;
