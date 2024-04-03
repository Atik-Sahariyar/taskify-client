import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMyTasks = () => {
  const axiosPublic = useAxiosPublic();
  const email = localStorage.getItem("email");

  const {data: tasksData, isPending, refetch} = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${email}`, { withCredentials: true});
      return res?.data;
    },
  });

  const allTasks = tasksData?.allTasks;
  const todoTasks = tasksData?.todoTasks;
  const ongoingTasks = tasksData?.ongoingTasks;
  const completedTasks = tasksData?.completedTasks;

  return {allTasks, todoTasks, ongoingTasks, completedTasks, isPending, refetch};
};

export default useMyTasks;
