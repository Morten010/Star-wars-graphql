import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Characters from './pages/Characters'
import Movies from './pages/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main
        className='max-w-screen-xl mx-auto'
        >
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
