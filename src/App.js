import { Header } from './components/Header'; // importing the module Header from the directory
import { Footer } from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {
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
    <div className="App">
      <Header />
      <h1>Task List</h1>
      {/* manipulating the toggler to change the set state property whenever clicked */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {/* the show useState acting as a conditioner preceeding the tasks useState
        ie if the show state is false the preceeded should not happen */}
        {show &&
          tasks.map((task) => (
            <li
              // always setting the key for the map
              key={task.id}
              // using the ternary to add css functionality to the className attribute
              className={task.completed ? 'completed' : 'incomplete'}
            >
              <span>
                {task.id} - {task.name}
                <button
                  onClick={() => handleDelete(task.id)}
                  className="delete"
                >
                  delete
                </button>
              </span>
            </li>
          ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
