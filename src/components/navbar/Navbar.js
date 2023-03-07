import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Profile from '../../images/profile_img.webp'
import { themeContext } from "../../context/themecontext";

function Navbar() {
  const {toggle}=useContext(themeContext)
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:'none'}}>
          <span>HyiBuddy</span>
        </Link>
        <Link to='/' style={{textDecoration:'none',color:'black'}}>

        <HomeOutlinedIcon />
        </Link>

           
          <DarkModeOutlinedIcon style={{cursor:"pointer"}} onClick={toggle}/>
          
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="right">
        <EmailOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
        <img src={Profile}  alt=''/>
          <span>Gopal Das</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
