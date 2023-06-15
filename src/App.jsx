import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./reset.css";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([{}]);

  const toDoDeleteButtonHandler = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
    alert("삭제되었습니다!");
  };

  const toDoDoneButtonHandler = (id) => {
    todos.map((item) => {
      if (item.id === id) {
        item.isDone = true;
      }
      return setTodos([...todos]);
    });
  };

  const toDoCancleButtonHandler = (id) => {
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
        <ul className="todo-list">
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
        <ul className="todo-list">
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

const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todoTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const todoContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const toDoAddButtonHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <form id="form">
        <div id="form-input-container">
          <span>제목</span>
          <input type="text" value={title} onChange={todoTitleChangeHandler} />
          <span>내용</span>
          <input
            type="text"
            value={content}
            onChange={todoContentChangeHandler}
          />
        </div>
        <button onClick={toDoAddButtonHandler}>추가하기</button>
      </form>
    </div>
  );
};

const Working = ({ item, toDoDeleteButtonHandler, toDoDoneButtonHandler }) => {
  return (
    <li key={item.id} className="todo-box">
      <div className="todo-content-wrap">
        <span className="todo-title">{item.title}</span>
        <br />
        <span className="todo-content">{item.content}</span>
        <div className="button-wrap">
          <button onClick={() => toDoDeleteButtonHandler(item.id)}>
            삭제하기
          </button>
          <button onClick={() => toDoDoneButtonHandler(item.id)}>완료</button>
        </div>
      </div>
    </li>
  );
};

const Done = ({ item, toDoDeleteButtonHandler, toDoCancleButtonHandler }) => {
  return (
    <li key={item.id} className="todo-box">
      <div className="todo-content-wrap">
        <span className="todo-title">{item.title}</span>
        <br />
        <span className="todo-content">{item.content}</span>
        <div className="button-wrap">
          <button onClick={() => toDoDeleteButtonHandler(item.id)}>
            삭제하기
          </button>
          <button onClick={() => toDoCancleButtonHandler(item.id)}>취소</button>
        </div>
      </div>
    </li>
  );
};

export default App;
