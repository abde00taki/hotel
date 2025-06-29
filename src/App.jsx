// import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";


function App() {

  const [darckMod, setDarckMod] = useState(true)
  function chengeLight() {
    setDarckMod(!darckMod)
  }

  return (
    <>
      <div style={{backgroundColor:  darckMod === true ? "black" : "white"}}>
        <nav className="navbar navbar-expand-lg  position-fixed w-100">
        <div className="container-fluid">

          <a className="navbar-brand mx-4 fs-3  text-light" href="#"> <img src="hotel.png" alt="" /> Hotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ">
                <a className="nav-link fs-5 mx-4 text-light " href="#">Home </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link fs-5 mx-4 text-light " href="#">Apartment </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  mx-4 fs-5 text-light" href="#">Rooms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fs-5 text-light" href="#">Contact us</a>
              </li>

            </ul>
            <button onClick={chengeLight} className='btn btn-warning'>
              {darckMod && <MdNightlightRound />}
              {!darckMod && <CiLight /> }
            </button>

          </div>
        </div>
      </nav>
      <Home />

      </div>
    </>
  )
}

export default App
