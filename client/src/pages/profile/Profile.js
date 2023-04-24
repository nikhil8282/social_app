import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { authContext } from '../../context/authContext';

import Update from '../../components/update/Update';
import Posts from '../../components/posts/Posts';


function Profile() {
  const [isupdate,setisupdate]=useState(false);
  const {id}=useParams();
  const queryClient = useQueryClient();
  const {user}=useContext(authContext);
  const {isloading,error,data}=useQuery(["user",id],()=>{
    return makeRequest(`/user/find/${id}`).then((res)=>res.data)
  })

  // api to get followers of current users ids list

  const mutation = useMutation((isFollow)=>{
    if(isFollow)return makeRequest.delete("/relation?userId="+id)
    return makeRequest.post("/relation?userId="+id)
  },{
    onSuccess:()=>{
      queryClient.invalidateQueries(["relation"])
    }
  })

  const handleClick=(e)=>{
    e.preventDefault();
    mutation.mutate(followedIds.includes(+id))
  }
  
  const {data:followedIds}=useQuery(["relation"],()=>makeRequest.get("/relation").then(res=>res.data))

  const handleChange=(e)=>{
    e.preventDefault();
    setisupdate(!isupdate);
  }
  
  // const {}
  return (
    <div className='profile'>
      {
        error?"error":isloading?"loading...":(

        <div className='images'>
        <img className="cover" src={data && (data[0].coverPic === null ?"/uploaded/b.webp":data[0].coverPic)} />
        <img className='pic' src={data && (data[0].profilePic === null ?"/uploaded/b.webp":data[0].profilePic)}/>
        {id===user.id && <span className='pen coverPen'><CreateOutlinedIcon fontSize="1"/></span>}
        {id===user.id && <span className='pen profilePen'><CreateOutlinedIcon fontSize="1"/></span>}
      </div>
          )
      }
      <div className='profileContainer'>

        <div className='userInfo'>
          <div className='left'>
            <a href='https://facebook.com' target='/'>
              <FacebookTwoToneIcon fontSize='medium' />
            </a>
            <a href='https://pinterest.com' target='/'>
              <PinterestIcon fontSize='medium' />
            </a>
            <a href='https://instagram.com' target='/'>
              <InstagramIcon fontSize='medium' />
            </a>
            <a href='https://linkedin.com' target='/'>
              <LinkedInIcon fontSize='medium' />
            </a>
            <a href='https://twitter.com' target="/">
              <TwitterIcon fontSize='medium' />
            </a>

          </div>
          <div className='center'>
            <span>{data && data[0].username}</span>
            <div className='info'>
              <div className='items'>
                <PlaceIcon />
                <span>
                  place
                </span>
              </div>
              <div className='items'>
                <LanguageIcon />
                <span>
                  language
                </span>
              </div>
            </div>

            {
              +id === user.id?
              <button onClick={handleChange}>update</button>:
              <button onClick={handleClick}>{followedIds?.includes(+id)?"Following":"Follow"}</button>
            }
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      {isupdate &&  <Update handleChange={handleChange}/> }
      <Posts/>
      </div>
    </div>
  )
}

export default Profile