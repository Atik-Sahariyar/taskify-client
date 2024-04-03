import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const TaskCreationPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // new task create function
  const handleCreatTask = async (data) => {
    const aouthorEemail = user?.email;
    const aouthorName = user?.displayName;
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;

    const taskData = {
      aouthorName,
      aouthorEemail,
      title,
      description,
      deadline,
      priority,
      status: "todo",
    };

    const res = await axiosSecure.post("/tasks", taskData);

    if (res.data?._id) {
      toast.success("New task created successfully!", {
        position: 'top-right',
        autoClose: 2000, 
      });
      navigate("/dashboard/allTasks");
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full sm:w-1/2 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Task</h2>

        <form onSubmit={handleSubmit(handleCreatTask)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Task Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-xs">Title is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Task Description"
              {...register("description")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="deadline"
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <span className="text-red-500 text-xs">Deadline is required</span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("priority")}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreationPage;
