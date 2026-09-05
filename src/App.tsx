
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './SharedComponent/NavBar/NavBar'
import Footer from './SharedComponent/Footer/Footer'
import About from './pages/About'
import Academics from './pages/Academics'
import Admission from './pages/Admission'
import StudentLife from "./pages/studentLife"
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/academics' element={<Academics/>}></Route>
      <Route path='/admission' element={<Admission/>}></Route>
      <Route path='/student-Life' element={<StudentLife/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
