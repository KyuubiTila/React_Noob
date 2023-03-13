import { useState } from 'react';
import './AddTask.css';

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState('');

  const [progress, setProgress] = useState(false);

  const handleReset = () => {
    setTaskValue('');
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 3000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    console.log(task);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          onChange={(e) => setTaskValue(e.target.value)}
          value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
      <p>{taskValue.length}</p>
    </section>
  );
};
