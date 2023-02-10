const TodoItem = (props) => {
    const deleteTodo = () => {
      props.onCheck(props.id);
    };
    return (
      <div className="todo" onClick={deleteTodo}>
        <input type="checkbox"></input>
        <label>{props.text} <button><i className="fa-solid fa-trash"></i></button></label>
      </div>
    );
  };
 
  export default TodoItem;