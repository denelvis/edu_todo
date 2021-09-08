import React from "react";
import TodoList from "./todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    {id:1, done: false, title: 'Learn English'},
    {id:2, done: false, title: 'Learn React'},
    {id:3, done: false, title: 'Learn JavaScript'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map( todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
      })
    )
  }

  return (
    <div className='wrapper'>
      <h1>React ToDo</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
