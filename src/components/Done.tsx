import { Todo } from "../model/todo";

interface DoneProps {
  item: Todo;
  toDoDeleteButtonHandler: (id: string) => void;
  toDoCancleButtonHandler: (id: string) => void;
}

const Done = ({
  item,
  toDoDeleteButtonHandler,
  toDoCancleButtonHandler,
}: DoneProps): JSX.Element => {
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

export default Done;
