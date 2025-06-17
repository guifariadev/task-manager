import { useEffect, useState } from "react";
import AddTask from "./components/AddTask.jsx"
import Tasks from "./components/Tasks.jsx"
import { v4 } from "uuid"; 

function App() {
  const [tasks, setTasks] = useState( 
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      } 
      return task;
    });
    setTasks(newTasks);
    };
  
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  };

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center p-6">
      <div className="w-[500px] space-y-8 bg-gray-800 p-8 py-10 rounded-md shadow-sm">
        <h1 className="text-5xl text-slate-100 font-bold text-center" >Task manager</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick} 
      />
      </div>
    </div>
  );
}

export default App;