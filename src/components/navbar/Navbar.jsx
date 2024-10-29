import React, { useState } from "react";
import "./Navbar.css";
import Display from '../../icons_FEtask/Display.svg'
import DropDown from '../../icons_FEtask/down.svg'

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="navbar_container">
      <div className="navbar_display_btn" onClick={toggleDropdown}>
        <img src={Display} alt="display" />
        <div className="navbar_display_btn_txt">Display</div>
        <img src={DropDown} alt="drop-down" />
      </div>
      {dropDown && (
          <div className="navbar_dropdown_container">
            <div className="dropdown_options">
              <p>Grouping</p>
              <select name="grouping" id="grouping">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
               </select>
            </div>
            <div className="dropdown_options">
              <p>Ordering</p>
              <select name="ordering" id="ordering">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
               </select>
            </div>
          </div>
        )}
    </div>
  );
}

export default Navbar;
