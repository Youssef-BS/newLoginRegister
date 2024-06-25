import React from 'react'
import ProductBox from '../components/newIn/NewIn'
import Boxes from '../components/boxes/Boxes'
import Videos from '../components/videos/Videos'
import New from '../components/new/New'
import NewsRoom from '../components/newsroom/NewsRoom'


const Home = () => {
  return (
    <>
    <Boxes />   
    <Videos />
    <NewsRoom />
    <ProductBox />
    <New />
    </>
  )
}

export default Home