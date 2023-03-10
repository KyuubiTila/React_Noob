import './TaskCard.css';

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li
        // always setting the key for the map

        // using the ternary to add css functionality to the className attribute
        className={`taskcard ${task.completed ? 'completed' : 'incomplete'}`}
      >
        <span>
          {task.id} - {task.name}
        </span>
        <button onClick={() => handleDelete(task.id)} className="delete">
          delete
        </button>
      </li>
    </div>
  );
};
