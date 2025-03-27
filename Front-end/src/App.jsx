import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import MenuPage from './Pages/MenuPage'
import HorizontalScrollingLines from './Components/HorizontalScrollComponent'
import YT_video_Component from './Components/YT_video_Component'
import TRy from './Components/TRy'
import NextSection from './Components/NextSection'

function App() {
 

  return (
    <>
    {/* <LandingPage/> */}
    <MenuPage/>
    <HorizontalScrollingLines/>
    {/* <YT_video_Component/> */}
     {/* <TRY/> */}
    {/* <TRY nextSection={<NextSection />} /> */}

    <TRy nextSection={<MenuPage />} />
      <div className="h-screen bg-black text-white text-3xl flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Your Content Here</h2>
          <p className="max-w-2xl mx-auto">High-contrast, accessible content area</p>
        </div>
      </div>
  
    </>
  )
}

export default App
