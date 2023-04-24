import React, { useContext, useState } from 'react'
import "./update.scss"
import { authContext } from '../../context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
function Update({handleChange}) {
    const {user}=useContext(authContext);

    const [name,setname]=useState(user.name);
    const [username,setusername]=useState(user.username);
    const [email,setemail]=useState(user.email);


    const queryClient = useQueryClient();
    const mutation = useMutation((obj)=>{
        return makeRequest.put("/users/update/"+user.id,obj)
    },{
        onSuccess:()=>{
            queryClient.invalidateQueries(["users",user.id])
        }
    })


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
                <button onClick={handleChange}>
                    Cancle
                </button>
                <button>
                    Ok
                </button>
            </div>
              
            
            </div>
        </div>
    </div>
  )
}

export default Update