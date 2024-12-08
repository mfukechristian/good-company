import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaDashcube } from "react-icons/fa";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import {
  MdOutlineVibration,
  MdOutlineStorefront,
  MdAutoGraph,
  MdOutlineSupportAgent,
  MdOutlineSettings,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="menu-links">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? (
            <TbLayoutSidebarLeftCollapse style={{ fontSize: "30px" }} />
          ) : (
            <TbLayoutSidebarRightCollapse style={{ fontSize: "30px" }} />
          )}
        </button>

        {/* Logo Section */}
        <div className="logo">
          {isOpen ? (
            <img src="src/assets/logo.png" alt="logo" />
          ) : (
            <img src="src/assets/logo2.png" alt="logo" />
          )}
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            style={{ backgroundImage: `url(${CiSearch})` }}
          />
        </div>

        {/* Menu Items */}
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/" className="menu-item" activeClassName="active">
                <FaHome style={{ fontSize: "20px" }} /> {isOpen && "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="menu-item"
                activeClassName="active"
              >
                <MdOutlineVibration style={{ fontSize: "20px" }} />
                {isOpen && "Network"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/market"
                className="menu-item"
                activeClassName="active"
              >
                <MdOutlineStorefront style={{ fontSize: "20px" }} />
                {isOpen && "Market"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chat"
                className="menu-item"
                activeClassName="active"
              >
                <MdAutoGraph style={{ fontSize: "20px" }} />
                {isOpen && "Use AI"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Settings Section */}
      <div className="settings">
        <ul>
          <li>
            <NavLink
              to="/settings"
              className="menu-item"
              activeClassName="active"
            >
              <MdOutlineSettings style={{ fontSize: "20px" }} />
              {isOpen && "Settings"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className="menu-item"
              activeClassName="active"
            >
              <MdOutlineSupportAgent style={{ fontSize: "20px" }} />
              {isOpen && "Support"}
            </NavLink>
          </li>
        </ul>

        {/* Announcement */}
        {isOpen && (
          <div className="announcement">
            <div className="announcement-header">
              <span>Feature Available now!</span>
              <button className="close-btn">&times;</button>
            </div>
            <p>Check out the new dashboard view. Pages now load faster.</p>
            <div className="announcement-image">
              <div className="play-icon">&#9658;</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
