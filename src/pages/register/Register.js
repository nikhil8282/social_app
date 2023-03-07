import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/authContext';
import './register.scss';
export default function Register(){

const {formD,handleChange}=useContext(authContext);

  return(
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

            <input type='text'  value={formD.name} name='name' onChange={handleChange} placeholder='formD name'/>
            <input type='text' value={formD.email} name='email' onChange={handleChange} placeholder='email'/>
            <input type='password' value={formD.password} name='password'  onChange={handleChange} placeholder='password'/>
            <input type='password' value={formD.confirmPassword}  name='confirmPassword' onChange={handleChange} placeholder='confirm password'/>
          
            <button>Register</button>
            </form>
          </div>
        </div>
      </div>
  )
}