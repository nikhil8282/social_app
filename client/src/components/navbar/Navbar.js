import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import Profile from '../../images/profile_img.webp'
import { themeContext } from "../../context/themecontext";
import { authContext } from "../../context/authContext";
import { makeRequest } from "../../axios";

function Navbar() {
  const {toggle}=useContext(themeContext);
  const {user}=useContext(authContext);
  const [name,setname]=useState("");
  const [allUsers,setAllUsers]=useState(null);
  const navigate = useNavigate();
  const [fillterUsers,setFillterUsers]=useState([]);
  
  useEffect(()=>{
    makeRequest.get("/user").then(res=>{setAllUsers(res.data)});
    
  },[user])
  useEffect(()=>{
    if(name!==""){
      let arr= allUsers?.filter(obj=>obj.username.includes(name));
     setFillterUsers([...arr]);
    }
    else{
     setFillterUsers([]);
    }

  },[name])
  console.log(fillterUsers);
  
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
          <div className="top">

          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." className="ipt"  value={name} onChange={(e)=>setname(e.target.value)}/>
          </div>
          <div className="down">
            {
              fillterUsers.map(u=>(
                  
                  <div className="itm" key={u.id} onClick={()=>{setname("");navigate(`/profile/${u.id}`)}}>

              <img src={`/uploaded/${u.profilePic}`}/>
                
              <span>{u.username}</span>
            </div>))
            }
           
            
          </div>

        </div>
      </div>
      <div className="right">
        <EmailOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
        <Link to={`/profile/${user.id}`}>
              <img src={`/uploaded/${user.profilePic}`} />
            </Link>
          <span>{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
