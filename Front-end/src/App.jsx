import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import MenuPage from './Pages/MenuPage'
import HorizontalScrollingLines from './Components/HorizontalScrollComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LandingPage/> */}
    {/* <MenuPage/> */}
    <HorizontalScrollingLines/>
    </>
  )
}

export default App
