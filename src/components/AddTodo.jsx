import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

export default AddTodo;
