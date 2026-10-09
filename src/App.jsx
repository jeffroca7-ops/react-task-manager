import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { useState, useEffect } from 'react'


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("reactTasks")
    
    if (savedTasks === null) {
      return []
    }

    try {
      const parsedTasks = JSON.parse(savedTasks)

      return Array.isArray(parsedTasks) ? parsedTasks : []
    } catch (error) {
      console.error("Failed to laod saved tasks:", error)
      return []
    }

  })

  function addTask(task) {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }
    setTasks( [...tasks, newTask] )

  }

  function deleteTask(taskId)  {
    setTasks( tasks.filter((task) => task.id !==taskId))

  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task 

    })

    setTasks(updatedTasks)

  }

   useEffect(() => {
    localStorage.setItem("reactTasks", JSON.stringify(tasks))

      }, [tasks])

 
  
  return (
  

  <div className="app-container">
    
          <h1>React Task Manager</h1>
          <p>Manage your task efficiently.</p>

          <TaskForm addTask = {addTask} />
          <TaskList tasks = {tasks} deleteTask = {deleteTask} toggleTask = {toggleTask} />
  
  </div>

  )
}

export default App
