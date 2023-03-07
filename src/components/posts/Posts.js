import React from 'react'

import './posts.scss'
import Post from './Post';

function  Posts() {
  const posts=[
    {
      id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',des:'oihiofdjggoidfg d gd gsd fgdrgrem wr trt  '
  },
  {
      id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',des:'oihiofdjggoidfg d gd gsd fgd wrtv  yrtyvery  rt y e rtue b y erty ert'
  },
  {
      id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',des:'oihiofdjggoidfg d gd rgrem wr trt  wrtv  yrtyvery  rt y e rtue b y erty ert'
  },
  {
      id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',userPic:'http://localhost:3000/static/media/profile_img.3e5d0d59e52baf4513e8.webp',des:'oihiofdjggoidfg d gd gsd fgdrgrem wr trt  wrtv  yrtyvery  rt y e rtue b y erty ert'
  },
   
  ]
  return (
    <div className='posts'>
      {
        posts.map(post=>(
          <Post userName={post.name} userPic={post.userPic} postDes={post.des} postImg={post.img} />
        ))
      }
      </div>
  )
}

export default  Posts