import { Link } from "react-router-dom";
import TargetAudience from "./TargetAudience";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <section className=" py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Efficient Task Management
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Stay organized and boost productivity with our task management
              system.
            </p>
            {user ? (
              <Link
                to="/dashboard"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Get Started
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </section>

      <TargetAudience />
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Taskify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
