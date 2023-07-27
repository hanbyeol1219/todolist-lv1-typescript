import { ChangeEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../model/todo";

interface AddTodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo = ({ todos, setTodos }: AddTodoProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todoTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const todoContentChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const toDoAddButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
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
