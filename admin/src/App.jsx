import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';


function App() {


  return (
    <> 
    <ToastContainer />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <hr className='border-gray-300' />
        <div className="flex w-full">
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
