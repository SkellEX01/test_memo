import React, { useState, memo, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])

  const increment = () => {
    setCount(count + 1)
  }

  const addTodo = useCallback(() => {
    setTodos([...todos, 'new todo'])
  }, [todos])

  return (
      <div>
        <Todos todos={todos} addTodo={addTodo} />
        <hr/>
        <div>
          Count: {count}
          <br/>
          <button onClick={increment}>INCREMENT</button>
        </div>
      </div>
  )
}

const Todos = memo(({ todos, addTodo }) => {
  console.log('TODOS RENDERED')
  return <>
    <h1>MY TODOS</h1>
    {
      todos.map((todo, index) => <p key={index}>{todo}</p>)
    }
    <button onClick={addTodo}>Add todo</button>
  </>
})

export default App