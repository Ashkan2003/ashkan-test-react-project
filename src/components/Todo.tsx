import { todoType } from "../types/globalTypes";
import "./Todo.css";

interface Props {
  todo: todoType;
}

const Todo = ({ todo }: Props) => {
  return (
    <div className="todo-container">
      <img id="todo-icon" src={todo.icon} />
      <div className="texts">
        <p>{todo.title}</p>
        <p>{todo.date}</p>
      </div>
    </div>
  );
};

export default Todo;
