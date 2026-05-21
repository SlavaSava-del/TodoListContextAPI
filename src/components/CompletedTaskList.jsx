import { useContext } from "react";
import { TaskContext } from "../TaskProvider";
import TaskItem from "./TaskItem";

function CompletedTaskList() {
  const { completedTasks } = useContext(TaskContext);
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default CompletedTaskList;
