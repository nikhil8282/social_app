import React from 'react'
import './comment.scss'

function Comment() {
    const comments=[
  {
    id:1,name:'nikhil',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',comment:'oihiofdjggoidfg d gd gsd fgdrgrem wr trt  '
},
{
    id:2,name:'nikhil',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',comment:'oihiofdjggoidfg d gd gsd fgd wrtv  yrtyvery  rt y e rtue b y erty ert'
},
{
    id:3,name:'nikhil',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',comment:'oihiofdjggoidfg d gd rgrem wr trt  wrtv  yrtyvery  rt y e rtue b y erty ert'
},
{
    id:3,name:'nikhil',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',comment:'oihiofdjggoidfg d gd gsd fgdrgrem wr trt  wrtv  yrtyvery  rt y e rtue b y erty ert'
},
 
]
  return (
    <div className='comments'>
        <div className='input-sec'>
            <img src='http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp'/>
            <input type='text' placeholder="write comment"/>
            <button>send</button>

        </div>
        {
            comments.map(com=>(
                <div className='comment'>
                    <img src={com.userPic}/>
                    <div className="info">
                        <span >{com.name}</span>
                        <p>{com.comment}</p>
                    </div>
                    <span className='date'>1 min ago</span>
                </div>
            ))
        }
      

        </div>
       
  )
}

export default Comment