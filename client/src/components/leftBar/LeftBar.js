import './leftBar.scss'
import  {useContext} from 'react'
import { authContext } from '../../context/authContext'
import { Link } from 'react-router-dom'

import Friends from '../../images/1.png'
import Groups from '../../images/2.png'
import Market from '../../images/3.png'
import Watch from '../../images/4.png'
import Memories from '../../images/5.png'
import Events from '../../images/6.png'
import Gaming from '../../images/7.png'
import Gallery from '../../images/8.png'
import Videos from '../../images/9.png'
import Messages from '../../images/10.png'
import Tutorial from '../../images/11.png'
import Courses from '../../images/12.png'
import Fund from '../../images/13.png'

function LeftBar() {
  const {user}=useContext(authContext)
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
        <div className='user'>
        <Link to={`/profile/${user.id}`}>
              <img src={"/uploaded/"+user.profilePic} />
            </Link>
          <span>{user.name}</span>
        </div>
        <div className='items'>
          <img src={Friends}/>
          <span>Friends</span>
        </div>
        <div className='items'>
          <img src={Groups}/>
          <span>Groups</span>
        </div>
        <div className='items'>
          <img src={Market}/>
          <span>Market</span>
        </div>
        <div className='items'>
          <img src={Watch}/>
          <span>Watch</span>
        </div>
        <div className='items'>
          <img src={Memories}/>
          <span>Memories</span>
        </div>
        <hr/>
        <div className='menu'>
          <span>your shortcuts</span>

        <div className='items'>
          <img src={Events}/>
          <span>Events</span>
        </div>
        <div className='items'>
          <img src={Gaming}/>
          <span>Gaming</span>
        </div>
        <div className='items'>
          <img src={Gallery}/>
          <span>Gallery</span>
        </div>
        <div className='items'>
          <img src={Videos}/>
          <span>Videos</span>
        </div>
        <div className='items'>
          <img src={Messages}/>
          <span>Messages</span>
        </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>
            others
          </span>
          
        <div className='items'>
          <img src={Tutorial}/>
          <span>Tutorial</span>
        </div>
       
        <div className='items'>
          <img src={Courses}/>
          <span>Courses</span>
        </div>
        <div className='items'>
          <img src={Fund}/>
          <span>Fund</span>
        </div>
        </div>
        
    
        </div>
      </div>
    </div>
  )
}

export default LeftBar