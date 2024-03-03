import { voidFunc } from "../types/globalTypes";
import "./AddTodoBtn.css";

interface Props {
  handleToggleModal: voidFunc;
}

const AddTodoBtn = ({ handleToggleModal }: Props) => {
  return (
    <div onClick={handleToggleModal} className="add-todo-container">
      <img id="add-todo-icon" src="/public/todo-list-imgs/add-square.svg" />
      <p>Add to Do</p>
    </div>
  );
};

export default AddTodoBtn;
