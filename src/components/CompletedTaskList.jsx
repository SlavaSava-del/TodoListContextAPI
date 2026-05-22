import TaskItem from "./TaskItem";
import useTask from "../hooks/useTask";

function CompletedTaskList() {
  const { completedTasks } = useTask();
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default CompletedTaskList;
