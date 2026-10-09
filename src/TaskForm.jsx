import { useState } from "react"

function TaskForm( {addTask} ) {
    const [taskInput, setTaskInput] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        if (taskInput.trim() === "") {
            return
        }

        console.log(taskInput)
        addTask(taskInput)
        setTaskInput("")
    }

    return (
        <form onSubmit={handleSubmit}> 

            <input aria-label="New Task" type="text" placeholder="Enter a task" value={taskInput} onChange={(event) => setTaskInput(event.target.value)}/>
            <button type="submit">Add Task</button>

        </form>
    )
}

export default TaskForm