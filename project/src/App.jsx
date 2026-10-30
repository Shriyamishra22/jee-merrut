import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import About from './Pages/About'
import CourseDetails from './Components/CourseDetails'



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/course' element={<Course />} />
          <Route path='/about' element={<About />} />
          <Route path='/course/:id' element={<CourseDetails />} />
        </Routes>

      </Router>





    </>
  )
}

export default App
