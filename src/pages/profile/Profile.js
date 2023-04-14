import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './profile.scss'
import Posts from '../../components/posts/Posts';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
function Profile() {
  const {id}=useParams();

  const {isloading,error,data}=useQuery(["user"],()=>{
    return makeRequest(`/user?id=${id}`).then((res)=>res.data)
  })
  
  // const {}
  return (
    <div className='profile'>
      <div className='images'>
        <img className="cover" src={data && data[0].coverPic} />
        <img className='pic' src={data &&data[0].profilePic}/>
      </div>
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
            <button>Follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile