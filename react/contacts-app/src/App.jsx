import React from 'react'
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/' element={<About/>} />
            <Route path='/' element={<Contact />} />
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App