import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { Header } from './components/Header'; // importing the module Header from the directory
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
