import React from 'react'
import MainList from '../components/main'
import MidCard from '../components/mid-card'
import Trending from '../components/trending'

const HomePage = () => {
  return (
    <div className="HomePage">
      <MidCard />
      <Trending />
      <MainList />
    </div>
  )
}

export default HomePage