import React from 'react';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

import Navbar from './components/navbar/Navbar'
import LeftBar from './components/leftBar/LeftBar'
import RigthBar from './components/rightBar/RightBar'

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
}  from "react-router-dom";



function App() {
  const user=true;
  const ProtectRoute=({children})=>{
    if(!user)return (<Navigate to='/login'/>)
    
    return children
  }
const Layout=()=>{
  return(
    <>
      <Navbar/>
      <div >
        <LeftBar/>
        <Outlet/>
        <RigthBar/>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProtectRoute><Layout/></ProtectRoute>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/profile/:id',
      element:<Profile/>
    }]
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  
  {
    path: "/register",
    element: <Register/> ,
  },
  {
    path: "/",
    element: <Home/> ,
  },

]);



  return (
<RouterProvider router={router}/>
  );
}

export default App;
