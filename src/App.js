import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

// import { ProductList } from "./components/store/ProductList";
// import Featchusers from "./components/store/Featchusers";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
 

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await featchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  // featch tasks
  const featchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    console.log(data);
    return data;
  };
  // featch tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    console.log(data);
    return data;
  };

  // add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };
 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
  };

  // Toggle remainder
  const remainder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, remainder: !taskToToggle.remainder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.JSON();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !data.remainder } : task
      )
    );
  };
  return (
    <>
      <Router>
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
         
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={deleteTask}
                      onTogggle={remainder}
                    />
                  ) : (
                    " No Tasks Found"
                  )}
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      {/* <Featchusers /> */}
      {/* <ProductList /> */}
    </>

  );
};

export default App;
