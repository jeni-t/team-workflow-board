import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

export default function Column({ status, tasks }) {
  return (
    <Droppable droppableId={status}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="column"
        >
          <h3>{status}</h3>

          {tasks.length === 0 && (
            <div className="empty">No tasks</div>
          )}

          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
