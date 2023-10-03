import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Characters from './pages/Characters'
import Movies from './pages/Movies'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main
        className='max-w-screen-xl mx-auto min-h-[calc(100vh-56px-48px)]'
        >
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
