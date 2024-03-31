import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const notifications = null;
  const location = useLocation();

  // Function to determine if the link is active
  const isLinkActive = (link) => {
    return location.pathname === link ? "bg-blue-500 text-white rounded px-2" : "";
  };

  // user logout function
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  // clickable links
  const navLinks = (
    <>
      <NavLink to="/" className={isLinkActive("/")}>Home</NavLink>
      <NavLink to="/about" className={isLinkActive("/about")}>About</NavLink>
      <NavLink to="/services" className={isLinkActive("/services")} >Services</NavLink>
      {user ? (
        <>
          <NavLink to="/dashboard" className={isLinkActive("/dashboard")}>Dashboard</NavLink>
        </>
      ) : (
        <NavLink to="/login" className={isLinkActive("/login")}>Login</NavLink>
      )}
    </>
  );

  return (
    <div className="navbar  max-w-screen-xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className=" flex gap-1">
          <img
            src="https://i.ibb.co/hKDHXdx/task-management-software-34-1024x511.png"
            className=" w-20  rounded-br-lg rounded-tl-lg"
            alt="logo"
          />
          <h3 className="btn btn-ghost hidden md:block lg:block normal-case text-xl">
            Task Management{" "}
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu flex gap-4 text-xl menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                {/* <FaNotif></FaNotif> */}
                {notifications > 0 ? (
                  <Link to="/announcements">
                    {" "}
                    <FaBell className=" text-2xl"></FaBell>
                    <span className="badge badge-sm indicator-item">
                      {notifications}
                    </span>
                  </Link>
                ) : (
                  <>
                    <FaBell></FaBell>
                  </>
                )}
              </div>
            </label>
          </div>
        </div>
        <div>
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="">
                  <img
                    className="w-16 rounded-full"
                    alt="User image"
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>  
                <li>
                <Link to = '/dashboard/myProfile'>View Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
