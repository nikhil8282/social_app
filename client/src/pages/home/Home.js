import React from 'react'
import Posts from '../../components/posts/Posts'
import Story from '../../components/stories/Story'
import './home.scss'
import Share from '../../components/share/Share'

function Home() {
  return (
    <div className="home">
      <Story/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home