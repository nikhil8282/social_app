import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss"
export default function Login(){
  return(
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>
            Hello world.
            </h1>
            <p>To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be </p>
            <span>
                Do you have an account?</span>
                <Link to='/register'>

                <button>
                  Register</button>
                </Link>

          </div>
          <div className='right'>
            <h1>Login</h1>
            <form>

            <input type='text' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Login</button>
            </form>
          </div>
        </div>
      </div>
  )
}