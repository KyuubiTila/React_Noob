import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1534, name: 'Record react Lectures', completed: true },
    { id: 2234, name: 'Record joint Lectures', completed: false },
    { id: 4653, name: 'Record happy Lectures', completed: false },
  ]);

  const [show, setShow] = useState(true); // setting another use state for the toggler button

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };
  return (
    // utilizing react fragment
    <div className="tasklist">
      <h1>Task List</h1>
      {/* manipulating the toggler to change the set state property whenever clicked */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
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
      <BoxCard result="success">
        {/* these are the children elements */}
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="descritption">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        {/* these are the children elements */}
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="descritption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eos
          quae!.
        </p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veniam
          non possimus eligendi sunt ab.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          reiciendis saepe.
        </p>
      </BoxCard>
    </div>
  );
};
