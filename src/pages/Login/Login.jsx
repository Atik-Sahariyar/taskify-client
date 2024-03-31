import  {  useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google.png";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [show, setShow] = useState(true);
  const {  googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">

      <div className="grid grid-cols-1 md:grid-cols-2 gap- items-center">
        <div className="hidden md:flex">
          <img
            className="max-w-[400px] w-[400px] -mr-4"
            src={
              "https://the-career-maker.netlify.app/assets/login-5c485f5b.svg"
            }
            alt=""
          />
        </div>

        <div className="max-w-[400px] w-[400px] m-4 border p-10 border-blue-100 shadow-md">
        <div>
              <h2 className="text-4xl text-center font-bold mb-5 text-blue-500">
                Sign In
              </h2>
              
            <button
          
              className="mb-5 border rounded-md w-full p-3 text-lg font-semibold flex items-center justify-center gap-3"
            >
              <img src={googleIcon} alt="" />
              Sign in with Google
            </button>
            </div>
          <form  className="space-y-3">
           

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaEnvelope />
                </span>
                <input
                  className="p-2 w-full focus:outline-blue-600"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300 relative">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaLock />
                </span>
                <input
                  className="p-2 w-full focus:outline-blue-600"
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="*******"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="cursor-pointer absolute right-3"
                >
                  <small>{show ? "Show" : "Hide"}</small>
                </p>
              </div>
            </div>

            <input
              type="submit"
              value="Sign In"
              className="shadow-md py-2 rounded-none w-full  bg-blue-400 hover:bg-blue-600 hover:text-white text-xl capitalize"
            />
          </form>

          <div>
            <p className="text-center">
              <small>
                New to this website?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;