

import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { Link, Route, Routes } from 'react-router-dom';
import ApartmentPages from './pages/ApartmentPage';
import ApartmentDitails from './pages/ApartmentDitails';
import AddApartment from './admin/admin';
import Navbar from './component/Navbar';




function App() {

  const [darckMod, setDarckMod] = useState(false)
  function chengeLight() {
    setDarckMod(!darckMod)
  }




  return (
    <>
      <div style={{ backgroundColor: darckMod === true ? "black" : "white" }}>
       


       <div>
         <Routes >
          <Route path="/" element={<Home />} />
          <Route path='/apartment' element={<ApartmentPages />} />
          <Route path="/apartment/:id" element={<ApartmentDitails />} />
          <Route path="/admin" element={<AddApartment />} />
        </Routes>
       </div>



      </div>
    </>
  )
}

export default App
