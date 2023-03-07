import React from 'react'
import Posts from '../../components/posts/Posts'
import Story from '../../components/stories/Story'
import './home.scss'
function Home() {
  return (
    <div className="home">
      <Story/>
      <Posts/>
    </div>
  )
}

export default Home