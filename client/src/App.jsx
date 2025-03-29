import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  )
}
