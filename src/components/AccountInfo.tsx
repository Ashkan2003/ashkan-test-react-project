import { todoType } from "../types/globalTypes";
import "./AccountInfo.css";
import AddTodoBtn from "./AddTodoBtn";
import Todo from "./Todo";

const todoList: todoType[] =[
  {title:"Run payroll",date:"Mar 4 at 6:00 pm",icon:"/public/todo-list-imgs/receipt.svg"},
  {title:"Review time off request",date:"Mar 7 at 8:00 pm",icon:"/public/todo-list-imgs/clock.svg"},
  {title:"Sign board resoluation",date:"Mar 12 at 8:30 pm",icon:"/public/todo-list-imgs/clipboard-text.svg"},
]

const AccountInfo = () => {
  return (
    <div className="account-info-container">
      {/* the top icons of the account-info */}
      <div className="account-info-icons">
        <img className="icon" src="/public/accountInfo-imgs/calendar.svg" />
        <img className="icon" src="/public/accountInfo-imgs/notification-bing.svg" />
        <img className="icon" src="/public/accountInfo-imgs/message-notif.svg" />
        <img id="avatar" src="/public/accountInfo-imgs/avatar-1.jpg" />
        <img id="arrow-down-icon" src="/public/accountInfo-imgs/arrow-down.svg" />
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
          {todoList.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
          ))}
          <AddTodoBtn/>
        </div>
      </div>
      {/* the board meeting-section */}
      <div className="board-text">
        <p>Board meeting</p>
        <p>Feb 22 at 6:00 PM</p>
        <p>You have been invited to attend a meeting of the Boeard Diretors.</p>
      </div>
    </div>
  );
};

export default AccountInfo;
