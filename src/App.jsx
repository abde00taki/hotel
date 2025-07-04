

import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { Link, Route, Routes } from 'react-router-dom';
import ApartmentPages from './pages/ApartmentPage';
import ApartmentDitails from './pages/ApartmentDitails';
import AddApartment from './pages/AddApartment';




function App() {

  const [darckMod, setDarckMod] = useState(false)
  function chengeLight() {
    setDarckMod(!darckMod)
  }




  return (
    <>
      <div style={{ backgroundColor: darckMod === true ? "black" : "white" }}>
        <nav className="navbar navbar-expand-lg   position-fixed w-100" >
          <div className="container-fluid">

            <a className="navbar-brand mx-4 fs-3  text-light" href="#"> <img src="hotel.png" alt="" /> Hotel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item ">
                  <Link to='/' className="nav-link fs-5 mx-4 text-light " >Home </Link>
                </li>
                <li className="nav-item ">
                  <Link to='/apartment' className="nav-link fs-5 mx-4 text-light " >Apartment </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  mx-4 fs-5 text-light" >Rooms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5 text-light" >Contact us</Link>
                </li>

              </ul>
               <Link to='/addapartment' className="btn btn-success mx-3" >add apatment</Link>
              <button onClick={chengeLight} className='btn btn-warning'>
                {darckMod && <MdNightlightRound />}
                {!darckMod && <CiLight />}
              </button>

            </div>
          </div>
        </nav>


       <div>
         <Routes >
          <Route path="/" element={<Home />} />
          <Route path='/apartment' element={<ApartmentPages />} />
          <Route path="/apartment/:id" element={<ApartmentDitails />} />
          <Route path="/addapartment" element={<AddApartment />} />
        </Routes>
       </div>



      </div>
    </>
  )
}

export default App
