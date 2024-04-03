import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-duotone-svg-icons';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaEnvelope, FaLock, FaTextWidth } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignUp = () => {
  const [show, setShow] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, googleSignIn, updateUserProfiole } = useAuth();
  const navigate = useNavigate();

  // new user registration with email and password function 
  const handleSignUp = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    const userRes = await createUser(email, password);

    if (userRes?.user?.uid) {
      console.log("call");
      await updateUserProfiole(name);
      const res = await axiosPublic.post("/users", data);
      console.log(res?.data);
      if (res?.data?._id) {
        toast.success("Sign up successfull!", {
          position: 'top-right',
          autoClose: 2000, 
        });        navigate("/");
        reset();
      }
    }
  };

  // user registration with google function
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async(res) => {
        const name = res?.user?.displayName;
        const email = res?.user?.email;
        const photoURL = res?.user?.photoURL;

        await axiosPublic.post("/users", { name, email, photoURL});
        toast.success("sign up successfull!", {
          position: 'top-right',
          autoClose: 2000, 
        });
  
        navigate("/");
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
              Sign Up
            </h2>

            <button
              onClick={handleGoogleSignIn}
              className="mb-5 border rounded-md w-full p-3 text-lg font-semibold flex items-center justify-center gap-3"
            >
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaTextWidth />
                </span>
                <input
                  className="p-2 w-full focus:outline-blue-600"
                  type="text"
                  {...register("name")}
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaEnvelope />
                </span>
                <input
                  className="p-2 w-full focus:outline-blue-600"
                  type="email"
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
              value="Sign Up"
              className="shadow-md py-2 rounded-none w-full  bg-blue-400 hover:bg-blue-600 hover:text-white text-xl capitalize"
            />
          </form>

          <div>
            <p className="text-center">
              <small>
                Already Have an account?{" "}
                <Link
                  to="/login"
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

export default SignUp;
