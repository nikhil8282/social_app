import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
export default function Register(){
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

            <input type='text' placeholder='User name'/>
            <input type='text' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='confirm password'/>
          
            <button>Register</button>
            </form>
          </div>
        </div>
      </div>
  )
}