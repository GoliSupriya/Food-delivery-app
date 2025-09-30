import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import PlaceOrder from './Pages/Place-Order/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {

  const [login,setLogin]=useState(false)
  return (
    <>
      {login?<LoginPopup setLogin={setLogin}/>:<></>}
      <div className='app'>
        <Navbar setLogin={setLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<PlaceOrder/>}></Route>
          </Routes>
      </div>
      <Footer/>
    </>
    
    
  )
}

export default App
