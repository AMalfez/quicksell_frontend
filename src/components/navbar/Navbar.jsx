import React, { useState } from "react";
import "./Navbar.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="navbar_container">
      <div className="navbar_display_btn" onClick={toggleDropdown}>
        <HiAdjustmentsHorizontal />
        <div className="navbar_display_btn_txt">Display</div>
        {!dropDown ? (
          <RiArrowDropDownLine className="dropdown_down" />
        ) : (
          <RiArrowDropUpLine className="dropdown_up" />
        )}
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
