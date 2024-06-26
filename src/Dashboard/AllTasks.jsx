import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useMyTasks from "../hooks/useMyTasks";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const email = localStorage.getItem("email");

const Task = ({
  _id,
  aouthorEemail,
  title,
  description,
  priority,
  deadline,
  handleDeleteTask,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: { _id, type: "TASK" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });



  return (
    <div className=" flex ">
      <div
        ref={dragRef}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className="border-t w-11/12 p-2 cursor-pointer"
      >
        <span>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{description}</p>
          <p className="text-sm text-gray-600">Priority: {priority}</p>
          <p className="text-sm text-gray-600">Deadline: {deadline}</p>
        </span>
      </div>
      <button onClick={() => handleDeleteTask(_id, aouthorEemail)}>X</button>
      {email !== aouthorEemail ? (
        ""
      ) : (
        <Link className=" text-sm" to={`/dashboard/updateTask/${_id}`}>
          🖊️
        </Link>
      )}
    </div>
  );
};

const AllTasks = () => {
  const { todoTasks, ongoingTasks, completedTasks, isPending, refetch } =
    useMyTasks();
  const axiosSecure = useAxiosSecure()

  if (isPending) {
    return <div className=" text-center">Loading...</div>;
  }

  // delete a task
  const handleDeleteTask = async (id) => {
    Swal.fire({
      title: "Delete task",
      text: `Are you sure you want to delete the  task}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/task/${id}`)
          .then((response) => {
            if (response.data) {
              toast.success("Your task has been deleted.", {
                position: 'top-right',
                autoClose: 2000, 
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting task:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the task.",
              "error"
            );
            
          });
      }
    });
  };

  const tasks = {
    todo: todoTasks,
    ongoing: ongoingTasks,
    completed: completedTasks,
  };

  const moveTask = async (source, destination, taskId) => {
    try {
      const res = await axiosSecure.patch(`/task/${taskId}`, {
        status: destination,
      });
      if (res.status === 200) {
        // Refresh tasks after successfully updating the task
        refetch();
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const TaskList = ({ listName, tasks, handleDeleteTask }) => {
    const [{ isOver }, dropRef] = useDrop({
      accept: "TASK",
      drop: (item) => moveTask(item.source, listName, item._id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

    return (
      <div ref={dropRef} className={` p-4 ${isOver ? "bg-gray-100" : ""}`}>
        <h2
          className={`text-xl font-bold mb-4 text-center  w-48 ${
            listName === "todo" && "bg-gray-500"
          } ${listName === "ongoing" && "bg-blue-500"} ${
            listName === "completed" && "bg-green-500"
          }  text-white rounded-md`}
        >
          {listName.charAt(0).toUpperCase() + listName.slice(1)}
        </h2>
        <div className="bg-white p-2 mb-2 rounded shadow">
          {tasks.map((task) => (
            <Task
              key={task._id}
              {...task}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row">
        {Object.entries(tasks)?.map(([listName, taskList]) => (
          <TaskList
            key={listName}
            listName={listName}
            tasks={taskList}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default AllTasks;
