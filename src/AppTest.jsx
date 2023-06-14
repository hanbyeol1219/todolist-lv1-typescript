import { useState } from "react";
import "./App.css";
import "./reset.css";

function App() {
  const [todos, setTodos] = useState([{ id: 1, todo: "미리 등록된 할 일" }]);

  const [todo, setTodo] = useState("");

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const toDoAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      todo,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const toDoDeleteButtonHandler = (id) => {
    let delChoice = confirm("삭제하시겠습니까?");
    if (delChoice) {
      console.log(id);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
      alert("삭제되었습니다!");
    }
  };

  return (
    <div>
      <div>
        <h1>TO DO LIST</h1>
      </div>
      <div>
        <h2>작성란</h2>
        <input type="text" value={todo} onChange={todoChangeHandler} />
        <button onClick={toDoAddButtonHandler}>등록</button>
      </div>
      <br />
      <div>
        <h2>해야 할 일</h2>
        <ul>
          <li>
            <ul>
              {todos.map((item) => {
                return (
                  <Todo
                    key={item.id}
                    todo={item}
                    toDoDeleteButtonHandler={toDoDeleteButtonHandler}
                  />
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h2>끝낸 일</h2>
        <ul>
          <li>
            <ul></ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Todo({ todo, toDoDeleteButtonHandler }) {
  const toDoDoneButtonHandler = () => {
    let doneChoice = confirm("완료하셨습니까?");
    if (doneChoice) {
      alert("끝낸 일로 이동합니다!");
    }
  };

  return (
    <li key={todo.id}>
      <span>{todo}</span>
      <button onClick={toDoDoneButtonHandler}>완료</button>
      <button onClick={() => toDoDeleteButtonHandler(todo.id)}>삭제</button>
    </li>
  );
}

export default App;
