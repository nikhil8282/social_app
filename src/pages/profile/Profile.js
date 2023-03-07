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
function Profile() {
  return (
    <div className='profile'>
      <div className='images'>
        <img className="cover" src='https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg' />
        <img className='pic' src='http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp' />
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
            <span>Nikhil Singh</span>
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