import React, { useState } from "react";
import "./navbar.scss";
import logo from "../Assets/Images/logo.png";
import menu from "../Assets/Images/menu.png";

const Navbar = () => {

  const [open , setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="left">
          <a href="" className="logo">
            <img src={logo} />
            <span>LamaEstate</span>
          </a>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>
        <div className="right">
           <a href="">Sign in</a>
          <a href="" className="register">Sign Up</a>
          <div className="menuIcon">
            <img src={menu} alt="" onClick={()=>setOpen((prev)=>!prev)}/>
          </div>
          <div className={open ?"menu active" :"menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
