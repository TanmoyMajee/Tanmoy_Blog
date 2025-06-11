import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function Home(){
  return(
    <>
      <Hero/>
      <Projects/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* wrap every route with layout  */}
          <Route path='/' element={<Layout/>}>
              <Route path='' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
