function TaskList({tasks, deleteTask, toggleTask}) {

    const activeCount = tasks.filter((task) => !task.completed).length
    return (
    <>
        <h2>Tasks</h2>
        {tasks.length > 0 && (
        <p>{activeCount} {activeCount === 1 ? "task" : "tasks"} remaining</p>
        )}
        {tasks.length === 0 && <p>No tasks yet. Add your first task!</p>}
        <ul>
            {tasks.map((task) => {
                return (
                    <li key={task.id}>
                        <span className={task.completed ? "completed" : ""}>{task.text}</span>

                <div className = "task-actions">
                    <button aria-label={`${task.completed ? "Uncomplete" : "Complete"} ${task.text}`} className="complete-btn" onClick={() => toggleTask(task.id)}>
                        {task.completed ? "Uncomplete" : "Complete"}
                    </button>
                

                    <button aria-label={`Delete ${task.text}`} className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>

                    </li>
                
                )


            })}
        </ul>
    </>
    )
    
}

export default TaskList