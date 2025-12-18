import { useState } from "react";
import Board from "./features/tasks/Board";
import Filters from "./features/tasks/Filters";
import TaskForm from "./features/tasks/TaskForm";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, setTasks } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState(null);

 const handleAddTask = (task) => {
  setTasks((prev) => [...prev, task]);
};

const handleDeleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};

const handleEditTask = (updatedTask) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
};

const handleEditClick = (task) => {
  setEditingTask(task);
  setShowModal(true);
};

const handleSaveTask = (task) => {
  if (editingTask) {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? task : t))
    );
    setEditingTask(null);
  } else {
    setTasks((prev) => [...prev, task]);
  }
};


const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">
      <div className="header">
        <h1>Team Workflow Board</h1>
        <button className="primary-btn" onClick={() => setShowModal(true)}>
          + Add Task
        </button>
      </div>

      <Filters search={search} setSearch={setSearch} />

   <Board
  tasks={filteredTasks}
  onDelete={handleDeleteTask}
  onEdit={handleEditClick}
/>


      {showModal && (
        <div className="modal">
          <div className="modal-box">
           {showModal && (
  <div className="modal">
    <div className="modal-box">
      <TaskForm
        onAdd={handleSaveTask}
        close={() => {
          setShowModal(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
      />
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </div>
  );
}
