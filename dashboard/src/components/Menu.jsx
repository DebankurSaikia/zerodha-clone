import React, { useState } from "react";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const username = localStorage.getItem("username");

  const userInitials = username
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // remove auth data
    localStorage.removeItem("token");

    localStorage.removeItem("username");

    // close dropdown
    setIsProfileDropdownOpen(false);

    // redirect
    window.location.href = "http://localhost:5173/signup";
  };

  const menuClass = "menu";

  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="logo.png"
        style={{
          width: "50px",
        }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              style={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile-container">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{userInitials}</div>

            <p className="username">{username}</p>

            <KeyboardArrowDownIcon className="dropdown-icon" />
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button onClick={handleLogout}>
                <LogoutIcon className="logout-icon" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
