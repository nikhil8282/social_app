import React from 'react'
import './story.scss'

const stories=[
    {
        id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        id:1,name:'nikhil',img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },

]
function Story() {

  return (
    <div className='stories'>
              <div className='story'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
                        <span>Nikhil singh</span>
                        <button>+</button>
            </div>    
        {
            stories.map((story)=>(
              <div className='story'>
                        <img src={story.img}/>
                        <span>{story.name}</span>
                        
                </div>    
            ))
        }

     </div>
  )
}

export default Story