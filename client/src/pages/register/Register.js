import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from "axios"

import './register.scss';
export default function Register() {

  const [formD, setformd] = useState({ username: "", email: "", password: "", name: "" });
  const [Err, seterr] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {

    setformd(p=>({ ...p, [e.target.name]: e.target.value }))
  }
  const hadleRegister = async (e) => {
    e.preventDefault();
    try {
      // console.log(formD)
      await axios.post('http://localhost:8800/api/auth/register', formD);
    
      
      navigate("/login");
      
    } catch (err) {
      seterr(err.response.data)

    }
  }

  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>
            Hello world.
          </h1>
          <p>To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be </p>
          <span>
            Do you have an account?</span>
          <Link to="/login">

            <button>
              Login</button>
          </Link>

        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>

            <input type='text' value={formD.username} name='username' onChange={handleChange} placeholder='username' />
            <input type='email' value={formD.email} name='email' onChange={handleChange} placeholder='email' />
            <input type='password' value={formD.password} name='password' onChange={handleChange} placeholder='password' />
            <input type='text' value={formD.name} name='name' onChange={handleChange} placeholder='name' />
            {
              Err&&Err
            }
            <button onClick={hadleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}