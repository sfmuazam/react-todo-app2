import React from 'react'
import TodoItem from './TodoItem'

// Menerima function toggleCompleted dan deleteTodo sebagai props
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted dan deleteTodo ke component TodoItem
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos
