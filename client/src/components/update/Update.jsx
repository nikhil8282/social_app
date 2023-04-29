import React, { useContext, useState } from 'react'
import "./update.scss"
import { authContext } from '../../context/authContext'
function Update({showUpdate,userMutation}) {
    const {user,getUser}=useContext(authContext);
    const {profilePic,coverPic}=user;
    const [name,setname]=useState(user.name);
    const [username,setusername]=useState(user.username);
    const [email,setemail]=useState(user.email);
    const handleClick= async(e)=>{
        e.preventDefault();
        await getUser(user.id);
        userMutation.mutate({
            username,
            name,
          email,
          profilePic,
          coverPic
        });
        getUser(user.id)
    }


  return (
    <div className='update'>
        <div className="card">
           
            <div className='formBox'>
            <div className='row'>
            <span>Name</span>
            <input type="text" name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>   
            <div className="row">
            <span>Username</span>
            <input type="text" name='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <div className="row">
            <span>Email</span>
            <input type="email" name='email' value={email}  onChange={(e)=>setemail(e.target.value)} required/>
            </div>
            <div className="btn">
                <button onClick={showUpdate}>
                    Cancle
                </button>
                <button onClick={handleClick}>
                    Ok
                </button>
            </div>
              
            
            </div>
        </div>
    </div>
  )
}

export default Update