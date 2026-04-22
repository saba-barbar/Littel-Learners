
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './SharedComponent/NavBar/NavBar'
import Footer from './SharedComponent/Footer/Footer'
import About from './pages/About'
import Academics from './pages/Academics'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/academics' element={<Academics/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
