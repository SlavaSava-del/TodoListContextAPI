import { useContext } from "react";
import { TaskContext } from "../TaskProvider";

function useTask() {
  const context = useContext(TaskContext);
  return context;
}

export default useTask;
