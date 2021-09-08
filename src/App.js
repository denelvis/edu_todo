import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

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

  function removeTodo(id) {
    setTodos(todos.filter( todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      done: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React ToDo</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>you don't have any todos</p> }
      </div>
    </Context.Provider>
  )
}

export default App;
