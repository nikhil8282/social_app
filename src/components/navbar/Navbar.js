import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



function Navbar() {
   
  return (
    <div className='navbar'>
        <div className='left'>
        <Link to='/home' style={{textDecoration:"none"}}>HyiBuddy</Link>
        
        </div>
        <div className='right'></div>
    </div>
  )
}

export default Navbar