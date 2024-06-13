import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setDrawer } from "../features/basketSlicer";
import { useDispatch } from "react-redux";

import Badge from '@mui/material/Badge';



const Header = () => {
  const [theme, setTheme] = useState(true);


const {products, drawer} = useSelector((store) => store.basket);

const dispatch = useDispatch();




  



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
        borderBottom: "1px solid #ddd",
      }}
    >
      <div className="flex-col" >

       <Link to="/">{ theme ? <img className="logo" src={logo} alt="" /> : <img className="logo" src={logo2} alt="" />}
      </Link>
      <p className="logo-text">Veysel</p>
      </div>
      <div>
        <div className="flex-row">
          <input className="search-input" type="text" placeholder="Search" />{" "}
          <Badge badgeContent={products.length} color="success" onClick={()=> dispatch(setDrawer(true))} > <SlBasket className="icons" style={{ marginLeft: "10px" }} />
          
          </Badge>

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
