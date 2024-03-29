import React, { useContext, useState } from 'react'
import './comment.scss'
import { makeRequest } from '../../axios'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import moment from "moment"
import { authContext } from '../../context/authContext'

function Comment({postId,data}) {
    const [des,setDes]=useState("");
    const {user}= useContext(authContext);
    const queryClient= useQueryClient();



    const mutation = useMutation(
    
        (p)=>makeRequest.post(`/comments`,p)
    ,{
  
      onSuccess:()=>{
        queryClient.invalidateQueries(["comments",postId])
      }
    })
    const handleClick= (e)=>{
      e.preventDefault();
  
      mutation.mutate({des,postId})
    }



    
    // console.log(data)

  return (

    <div className='comments'>

        <div className='input-sec'>
            <img src={`/uploaded/${user.profilePic}`}/>
            <input type='text' value={des} onChange={(e)=>setDes(e.target.value)} placeholder="write comment"/>
            <button onClick={handleClick}>send</button>

        </div>
        {
            
            data?.map(com=>(
                <div key={com.id} className='comment'>
                    <img src={`/uploaded/${com.profilePic}`}/>
                    <div className="info">
                        <span >{com.username}</span>
                        <p>{com.des}</p>
                    </div>
                    <span className='date'>{moment(com.time).fromNow()}</span>
                </div>
            ))
        
        }
      

        </div>
       
  )
}

export default Comment