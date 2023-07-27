import React from "react";
import { useState } from "react";
import "./reset.css";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Working from "./components/Working";
import Done from "./components/Done";
import { Todo } from "./model/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(
    () => JSON.parse(localStorage.getItem("todos") as string) || []
  );

  window.localStorage.setItem("todos", JSON.stringify(todos));

  const toDoDeleteButtonHandler = (id: string) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
    alert("삭제되었습니다!");
  };

  const toDoDoneButtonHandler = (id: string) => {
    todos.map((item) => {
      if (item.id === id) {
        item.isDone = true;
      }
      return setTodos([...todos]);
    });
  };

  const toDoCancleButtonHandler = (id: string) => {
    todos.map((item) => {
      if (item.id === id) {
        item.isDone = false;
      }
      return setTodos([...todos]);
    });
  };

  return (
    <div id="layout">
      <header id="header">
        <h1>My Todo List</h1>
        <span>React</span>
      </header>
      <AddTodo todos={todos} setTodos={setTodos} />
      <div className="todo-list-container">
        <h2 className="working-title">Working..🔥</h2>
        <ul className="todo-list" id="working-todos">
          {todos
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <Working
                  item={item}
                  toDoDeleteButtonHandler={toDoDeleteButtonHandler}
                  toDoDoneButtonHandler={toDoDoneButtonHandler}
                />
              );
            })}
        </ul>
      </div>
      <div className="todo-list-container">
        <h2 className="working-title">Done..🎉</h2>
        <ul className="todo-list" id="done-todos">
          {todos
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <Done
                  item={item}
                  toDoDeleteButtonHandler={toDoDeleteButtonHandler}
                  toDoCancleButtonHandler={toDoCancleButtonHandler}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
