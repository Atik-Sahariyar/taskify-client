import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Login = () => {
  const [show, setShow] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { googleSignIn, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();


  // lolgin with email and password function
  const handleLogin = async (data) => {
    const email = data?.email;
    const password = data?.password;
    const res = await signIn(email, password);
    console.log(res);
    if (res) {
      reset()
      toast.success("Login successfull!", {
        position: 'top-right',
        autoClose: 2000, 
      });      
      navigate(from, { replace: true });
    }
  };


  // user login with google function
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (res) => {
        const name = res?.user?.displayName;
        const email = res?.user?.email;
        const photoURL = res?.user?.photoURL;
        const response =  await axiosPublic.post("/users", { name, email, photoURL});

        if(response?.data){
          toast.success("Login successfull!", {
            position: 'top-right',
            autoClose: 2000, 
          });
          navigate(from, { replace: true });
        }
     
      })
      .catch((error) => {
        console.log(error);
      });
  };


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
              onClick={handleGoogleSignIn}
              className="mb-5 border rounded-md w-full p-3 text-lg font-semibold flex items-center justify-center gap-3"
            >
              <img src={googleIcon} alt="" />
              Sign in with Google
            </button>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaEnvelope />
                </span>
                <input
                  className="p-2 w-full focus:outline-blue-600"
                  type="text"
                  {...register("email")}
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
                  {...register("password")}
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
