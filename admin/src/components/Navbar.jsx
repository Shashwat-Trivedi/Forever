import React from 'react'
import {assets} from '../assets/assets.js';

const Navbar = () => {
  return (
    <>
        <img src={assets.logo} alt="" />
        <button>Logout</button>
    </>
  )
}

export default Navbar