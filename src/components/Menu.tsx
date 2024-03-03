import { useState } from "react";
import "./Menu.css";

type menuLiType = {
  title: string;
  icon: string;
};

const menuList: menuLiType[] = [
  { title: "Dashboard", icon: "/public/svgs/home.svg" },
  { title: "Report", icon: "/public/svgs/chart.svg" },
  { title: "Bank", icon: "/public/svgs/bank.svg" },
  { title: "Email", icon: "/public/svgs/email.svg" },
  { title: "Group", icon: "/public/svgs/people.svg" },
  { title: "List", icon: "/public/svgs/list.svg" },
  { title: "Finance", icon: "/public/svgs/money.svg" },
  { title: "Setting", icon: "/public/svgs/settings.svg" },
];

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((isOpen) => !isOpen);
  };
  return (
    <div className="menu-container">
      <div className={`menu ${isMenuOpen && "menu-open"}`}>
        <p className="title">Drop</p>
        {/* menu-toggle-btn */}
        <button onClick={handleClick} className="menu-toggle-btn">
          <img
            className={`${isMenuOpen && "rotated"}`}
            src="/public/svgs/right-arrow.svg"
            alt=""
          />
        </button>
        {/* menu list */}
        <ul className="list">
          {menuList.map((item, index) => (
            <li key={index}>
              <span className="prefix-item"></span>
              <img src={item.icon} alt="icon" />
              <span className="menu-list-name fadeInUp-animation">
                {item.title}
              </span>
              <span className="list-name-button-box fadeInUp-animation"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
