import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';
import './AddTask.css';

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true); // setting another use state for the toggler button

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };
  return (
    // utilizing react fragment
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>Task List</h1>
          {/* manipulating the toggler to change the set state property whenever clicked */}
          <button className="trigger" onClick={() => setShow(!show)}>
            {/* using ternary operators to be able to switch state name when switched */}
            {show ? 'Hide Tasks' : 'Show Tasks'}
          </button>
        </div>
        {/* the show useState acting as a conditioner preceeding the tasks useState
        ie if the show state is false the preceeded should not happen */}
        {show &&
          tasks.map((task) => (
            // the properties for each object to be passed would be declared here first
            // passing afunction as a dynamic property is also achievebale
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      {/* Being able to pass the child element along with the dynamic ones as properties */}
    </section>
  );
};
