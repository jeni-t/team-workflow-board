export default function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="task-card">
      {/* LEFT SIDE */}
      <div className="task-left">
        <p className="title">{task.title}</p>
        <p className="assignee">👤 {task.assignee || "Unassigned"}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="task-right">
        <span className={`badge ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <div className="actions">
          <button onClick={() => onEdit(task)}>✏️</button>
          <button onClick={() => onDelete(task.id)}>🗑</button>
        </div>
      </div>
    </div>
  );
}
