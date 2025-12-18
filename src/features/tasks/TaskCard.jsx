export default function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="task-card">
      <p className="title">{task.title}</p>
      <p className="assignee">👤 {task.assignee || "Unassigned"}</p>
      <span className={`badge ${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>

      <div className="actions">
        <button onClick={() => onEdit(task)}>✏️</button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </div>
    </div>
  );
}
