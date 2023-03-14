import React, {useState, useContext } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { authContext } from '../../context/authContext';
import "./login.scss"
export default function Login(){
  const {login}=useContext(authContext);
  const [Err, seterr] = useState(null);
  const navigate = useNavigate();
  const [formD, setformd] = useState({ username: "", password: ""});

  // handle onChange event
  const handleChange = (e) => {
    console.log("called")
    setformd(p=>({ ...p, [e.target.name]: e.target.value }))
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login button is clicked")
    try {
    
      await login(formD);
      console.log("it is logged successfully")
      
      navigate("/");
      
    } catch (err) {
      
      seterr(err.response.data)
    }
  }
  
  // console.log(Err)

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

            <input type='text' name='username' value={formD.username} onChange={handleChange} placeholder='username'/>
            <input type='password' name='password' value={formD.password} onChange={handleChange} placeholder='password'/>
           {
            Err&&Err
           }
           
            <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
  )
}