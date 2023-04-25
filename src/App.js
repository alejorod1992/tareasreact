
import './App.css';
import TaskSchedulerLogo from "./img/TASK SCHEDULER.png";
import TaskList from './components/Task-list';

function App() {
  return (
    <div className="task_scheduler">
      <div className="logo">
        <img
        src={TaskSchedulerLogo} className='logo__img' alt='logo lista de tareas'
        />
      </div>
   <div className="task_list">
    <h1>Tareas del día</h1>
    <TaskList />
   </div>
    </div>
  );
}

export default App;
