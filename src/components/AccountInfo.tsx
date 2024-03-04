import { useState } from "react";
import { personType, todoType, voidFunc } from "../types/globalTypes";
import "./AccountInfo.css";
import AddTodoBtn from "./AddTodoBtn";
import Todo from "./Todo";
import Button from "./Button";
import Badge from "./Badge";

const todoList: todoType[] = [
  {
    title: "Run payroll",
    date: "Mar 4 at 6:00 pm",
    icon: "/public/todo-list-imgs/receipt.svg",
  },
  {
    title: "Review time off request",
    date: "Mar 7 at 8:00 pm",
    icon: "/public/todo-list-imgs/clock.svg",
  },
  {
    title: "Sign board resoluation",
    date: "Mar 12 at 8:30 pm",
    icon: "/public/todo-list-imgs/clipboard-text.svg",
  },
];

const personListArray: personType[] = [
  {
    name: "Matin abbasi",
    id: "0234",
    icon: "/public/modal-imgs/avatar-1.png",
    checked: "true",
  },
  {
    name: "Matin ghadri",
    id: "0874",
    icon: "/public/modal-imgs/avatar-2png.png",
    checked: "true",
  },
  {
    name: "Matin kazemi",
    id: "0987",
    icon: "/public/modal-imgs/avatar-3.png",
    checked: "false",
  },
  {
    name: "Matin hasani",
    id: "0787",
    icon: "/public/modal-imgs/avatar-4.png",
    checked: "false",
  },
  {
    name: "Matin moham",
    id: "0787",
    icon: "/public/modal-imgs/avatar-7png.png",
    checked: "false",
  },
  {
    name: "Matin alipour",
    id: "0727",
    icon: "/public/modal-imgs/avatar-6.png",
    checked: "false",
  },
  {
    name: "Matin kazemi",
    id: "0987",
    icon: "/public/modal-imgs/avatar-3.png",
    checked: "false",
  },
  {
    name: "Matin rezaie",
    id: "0234",
    icon: "/public/modal-imgs/avatar-1.png",
    checked: "false",
  },
  {
    name: "Matin ghaadri",
    id: "0874",
    icon: "/public/modal-imgs/avatar-2png.png",
    checked: "true",
  },
];

const AccountInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSelectBoxOpen, setSelectBoxOpen] = useState(false);
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [personNameInputValue, setPersonNameInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchedPersonArray = personListArray.filter((person) => {
    if (!searchInputValue) return null;
    const personName = searchInputValue.toLowerCase().trim();
    if (person.name.toLowerCase().includes(personName)) {
      return person;
    } else {
      return null;
    }
  });

  console.log(searchedPersonArray, "sss");

  const handleToggleModal: voidFunc = () => {
    setModalOpen((isOpen) => !isOpen);
    setSelectBoxOpen(false);
  };

  const handleToggleSelectBox = () => {
    setSelectBoxOpen(true);
  };

  const handleClearTitleInputValue = () => {
    setInputTitleValue("");
  };

  // add new todo to todo-list when the user submit the form
  const handleAddNewTodo = () => {
    todoList.push({
      icon: "/public/todo-list-imgs/clipboard-task.svg",
      title: inputTitleValue,
      date: "Mar 12 at 9:30 pm",
    });
    setModalOpen(false);
  };

  return (
    <div className="account-info-container">
      {/* the top icons of the account-info */}
      <div className="account-info-icons">
        <img className="icon" src="/public/accountInfo-imgs/calendar.svg" />
        <img
          className="icon"
          src="/public/accountInfo-imgs/notification-bing.svg"
        />
        <img
          className="icon"
          src="/public/accountInfo-imgs/message-notif.svg"
        />
        <img id="avatar" src="/public/accountInfo-imgs/avatar-1.jpg" />
        <img
          id="arrow-down-icon"
          src="/public/accountInfo-imgs/arrow-down.svg"
        />
      </div>
      {/* the status-section */}
      <div className="status-container">
        {/* the text-box */}
        <div className="first-text-box">
          <p>Formation status</p>
          <p>In progress</p>
        </div>
        {/* the progress-bar */}
        <div className="progressbar-container">
          <div className="progressbar"></div>
        </div>
        {/* the second text-box */}
        <div className="second-text-box">
          <p>Estimated processing</p>
          <p>4-5 business days</p>
        </div>
        {/* the view btn */}
        <button className="view-btn">View status</button>
      </div>
      {/* the todo-section */}
      <div className="todo-info-container">
        <h2>Your to-Do list</h2>
        <div className="todo-list">
          {todoList.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </div>
        <AddTodoBtn handleToggleModal={handleToggleModal} />
      </div>
      {/* the board meeting-section */}
      <div className="board-text">
        <p>Board meeting</p>
        <p>Feb 22 at 6:00 PM</p>
        <p>You have been invited to attend a meeting of the Boeard Diretors.</p>
      </div>
      {/* add todo modal */}
      <div className={`modal-container ${isModalOpen && "open-modal"}`}>
        <div className="modal">
          <p className="modal-title">Add to do</p>
          <form>
            {/* title input */}
            <div className="title-box">
              <input
                id="title-input"
                value={inputTitleValue}
                onChange={(e) => setInputTitleValue(e.target.value)}
                type="text"
                name=""
                required
              />
              <label id="title-lable">write a title</label>
              <img
                onClick={handleClearTitleInputValue}
                id="delete-input-value-btn"
                src="/public/modal-imgs/close-circle.svg"
                alt="close-btn"
              />
            </div>
            {/* add person input */}
            <div onClick={handleToggleSelectBox} className="add-person-box">
              <input
                id="add-person-input"
                type="text"
                value={personNameInputValue}
                onChange={(e) => setPersonNameInputValue(e.target.value)}
                required
              />
              <label id="add-person-lable">add person</label>
              <img
                id="arrow-down-btn"
                src="/public/modal-imgs/arrow-drop-down.svg"
                alt="arrowBtn"
              />
              <div className="checked-badge-container">
                {personListArray.map(
                  (item, index) =>
                    item.checked === "true" && <Badge item={item} key={index} />
                )}
              </div>
            </div>
            {/* the person select-box */}
            {isSelectBoxOpen && (
              <div className="person-select-box-contaniner">
                <input
                  className="modal-search-form"
                  type="search"
                  placeholder="Search..."
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                />
                <div className="modal-search-options">
                  {searchedPersonArray.map((item, index) => (
                    <div className="person-info" key={index}>
                      {item.checked === "true" ? (
                        <input type="checkbox" checked />
                      ) : (
                        <input type="checkbox" />
                      )}
                      <img src={item.icon} alt="person-avatar" />
                      <span>
                        {item.name}/{item.id}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="status-info">
                  <p>Selected: 3</p>
                  <button>Clear selected</button>
                </div>
              </div>
            )}
            {/* the btns */}
            <div className="btns-container">
              <Button
                handleClick={handleToggleModal}
                text="Cancel"
                type="secondary"
              />
              <Button
                handleClick={handleAddNewTodo}
                text="Accept"
                type="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
