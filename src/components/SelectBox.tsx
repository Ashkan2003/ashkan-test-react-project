import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniChevronUp } from "react-icons/hi2";

const menuItemArray: string[] = [
  "Menu item",
  "Menu item",
  "Menu item",
  "Menu item",
  "Menu item",
  "Menu item",
];

import "./SelectBox.css";
const SelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectBoxClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="container">
      <div className="selectBox" onClick={handleSelectBoxClick}>
        <p>select</p>
        <span id="badge">Recent emails</span>
        {isOpen ? (
          <HiMiniChevronDown id="select-box-icon" />
        ) : (
          <HiMiniChevronUp id="select-box-icon" />
        )}
      </div>
      {isOpen && (
        <div className="option-container">
          {/* the search box */}
          <div className="search-box">
            <form className="search-form">
              <input
                className="search-form"
                type="search"
                placeholder="Search values"
              />
            </form>
          </div>
          {/* the options */}
          <div className="options-list">
            {menuItemArray.map((item, index) => (
              <div className="option" key={index}>
                <label className="option-label">
                  <input type="checkbox" id="checkBox" />
                  <span className="checkmark"></span>
                  <span id="menu-title">{item}</span>
                </label>
              </div>
            ))}
          </div>
          <button className="btn">Apply</button>
          <div className="select-box-des">
            <span>Selected: 5</span>
            <span id="clear-btn">Clear selected</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
