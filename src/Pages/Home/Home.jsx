import {useState} from 'react'
import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Explore-Menu/ExploreMenu'
import FoodDisplay from '../../Components/Food-display/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory]=useState('All');

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
