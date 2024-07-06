import React, { useState, useContext } from "react";
import "./Navbar.css";
import ChangeTheme from "../ChangeTheme/ChangeTheme";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../contexts/ThemeContext';


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleThemeSidebar = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  return (
    <div className="navbar-container" style={{ background: theme.background, color: theme.color }}>
      <navbar>
        <div>
          <Link to="/" style={{ background: theme.background, color: theme.color }}>
           Home
          </Link>
          <div className="search-box">
            <button class="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            <input
              value={searchQuery}
              onChange={handleInputChange}
              className="input-search"
              style={{color: theme.color }}
            ></input>
          </div>
        </div>
        <div>
          <a>Cart</a>
          <a>Message</a>
          <a>Notifications</a>
          <a onClick={toggleThemeSidebar}>Settings</a>
        </div>
      </navbar>
      {isThemeOpen && <ChangeTheme onClose={toggleThemeSidebar} />}
    </div>
  );
}
