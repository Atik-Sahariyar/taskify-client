import {  FaBook, FaHome, FaTasks, FaUpload } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isLinkActive = (link) => {
    return location.pathname === link ? "bg-blue-500 text-white rounded px-2" : "";
  };
    return (
    <div>
      <Helmet>
        <title>Dashboard | Task Management</title>
      </Helmet>
      <div className="flex flex-col md:flex-row">

        <div className=" w-full md:w-64  md:min-h-screen bg-blue-400 ">
          <span className="flex md:justify-center my-3 ml-5 md:ml-0">
          <img src={user?.photoURL} alt={user?.displayName}  className=" w-14 md:w-20 rounded-full"/>
          </span>
          <p className=" mx-3 text-white md:font-bold md:text-center">{user?.displayName}</p>
          <ul className=" p-2 flex flex-row justify-center md:flex-col gap-6 md:gap-1 ">
            {/* user routes */}
            <li>
              <NavLink to="/dashboard/allTasks" className={isLinkActive("/dashboard/allTasks")}>
                
                <span className=" flex gap-2 my-3 items-center hover:bg-blue-600 hover:text-white">
                  <FaTasks></FaTasks>
                  <span className=" hidden md:block">All Tasks</span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/taskCreate" className={isLinkActive("/dashboard/taskCreate")}>
                
                <span className=" flex gap-2 my-3 items-center hover:bg-blue-600 hover:text-white">
                  <FaUpload></FaUpload>
                  <span className=" hidden md:block">Create a task</span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myTasks" className={isLinkActive("/dashboard/myTasks")}>
                
                <span className=" flex gap-2 my-3 items-center hover:bg-blue-600 hover:text-white">
                  <FaBook></FaBook>
                  <span className=" hidden md:block">My Tasks</span>
                </span>
              </NavLink>
            </li>
            {/* Shaered Navlink */}
            <div className=" divider"></div>
            <li>
              <NavLink to="/">
                
                <span className=" flex gap-2 my-3 items-center hover:bg-blue-600 hover:text-white">
             
                <FaHome ></FaHome>

                  <span className=" hidden md:block">Go to Home</span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-5">
          <Outlet></Outlet>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
