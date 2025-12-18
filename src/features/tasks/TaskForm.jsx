import { useState } from "react";

export default function TaskForm({ onAdd, close, editingTask}) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("backlog");
  const [assignee, setAssignee] = useState(
  editingTask ? editingTask.assignee : ""
);


  function save() {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

   onAdd({
  id: editingTask ? editingTask.id : crypto.randomUUID(),
  title,
  priority,
  status,
  assignee,
});

    close();
  }

  return (
    <>
    
      <div className="modal-header">
      <h2>Add Task</h2>
      <button className="cancel-btn" onClick={close}>
        ✖ Cancel
      </button>
    </div>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

<select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
  <option value="">Assign to</option>
  <option value="Jenifer">Jenifer</option>
  <option value="Arun">Arun</option>
  <option value="Kumar">Kumar</option>
</select>


      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="backlog">Backlog</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="primary-btn" onClick={save}>
        Save Task
      </button>
    </>
  );
}
