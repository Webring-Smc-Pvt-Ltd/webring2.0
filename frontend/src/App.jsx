import { useState } from 'react'
import Header from "./components/Header"
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HomePage />
    {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:service1" element={<ServicesPage />} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
