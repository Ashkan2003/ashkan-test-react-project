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
];

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
      <p className="title">Drop</p>
      {/* menu list */}
      <ul>
        {menuList.map((item, index) => (
          <li key={index}>
            <img id="icon" src={item.icon} alt="icon" />
            {/* <span>{item.title}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
