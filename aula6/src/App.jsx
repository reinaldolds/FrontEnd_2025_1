import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Noticias from './pages/Noticias'

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/noticias" element={<Noticias/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App