import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';


function App() {


  return (
    <> 
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
