import React from 'react'
import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'


import img1 from './assets/sample_image.jpg'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Content />
      
      <img src={img1} className='sample-img'></img>
    </>
  )
}

export default App
