import { Todo } from "../model/todo";

interface WorkingProps {
  item: Todo;
  toDoDeleteButtonHandler: (id: string) => void;
  toDoDoneButtonHandler: (id: string) => void;
}

const Working = ({
  item,
  toDoDeleteButtonHandler,
  toDoDoneButtonHandler,
}: WorkingProps): JSX.Element => {
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

export default Working;
