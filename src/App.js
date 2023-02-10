import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./Redux/Reducer";
import TodoItem from './TodoItem';

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <h1>todo  List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} id={todo.id} onCheck={handleTodoDone}/>
            ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}

export default App;


