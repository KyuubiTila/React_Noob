import { TaskList } from './components/TaskList';
import { Header } from './components/Header'; // importing the module Header from the directory
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
