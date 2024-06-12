import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    const root = document.getElementById("root");
  
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff"; // Corrected the color value
    } else {
      root.style.backgroundColor = "#fff"; // Added the # for consistency
      root.style.color = "black";
    }
    setTheme(!theme);
  };;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-col">
       { theme ? <img className="logo" src={logo} alt="" /> : <img className="logo" src={logo2} alt="" />}
        <p className="logo-text">Veysel</p>
      </div>
      <div>
        <div className="flex-row">
          <input className="search-input" type="text" placeholder="Search" />{" "}
          <SlBasket className="icons" />
        </div>
        <div className="flex-row">
          {theme ? 
           <IoMoon className="icons" onClick={changeTheme} />
           : 
           
           <CiLight className="icons" onClick={changeTheme} />
            
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
