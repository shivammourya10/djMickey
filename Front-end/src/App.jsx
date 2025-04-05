import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import MenuPage from './Pages/MenuPage'
import HorizontalScrollingLines from './Components/HorizontalScrollComponent'
import YT_video_Component from './Components/YT_video_Component'
import TRY from './Components/TRy'
import NextSection from './Components/ImageStackGalleryComponent'
import ImageStackGallery from './Components/ImageStackGalleryComponent'

function App() {
 

  return (
    <>
    <LandingPage/> 
    <HorizontalScrollingLines/>
     <YT_video_Component/> 
     <TRY nextSection={<NextSection />} />

    
      
  
    </>
  )
}

export default App