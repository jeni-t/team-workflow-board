import TaskCard from "./TaskCard";

export default function Board({ tasks, onDelete, onEdit }) {
  const backlog = tasks.filter(t => t.status === "backlog");
  const inProgress = tasks.filter(t => t.status === "in-progress");
  const done = tasks.filter(t => t.status === "done");

  const renderTasks = (list) =>
    list.length === 0 ? (
      <p className="empty">No tasks</p>
    ) : (
      list.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))
    );

  return (
    <div className="board">
      <div className="column">
        <h3>Backlog</h3>
        {renderTasks(backlog)}
      </div>

      <div className="column">
        <h3>In Progress</h3>
        {renderTasks(inProgress)}
      </div>

      <div className="column">
        <h3>Done</h3>
        {renderTasks(done)}
      </div>
    </div>
  );
}
