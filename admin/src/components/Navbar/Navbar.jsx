import React from 'react';
import './Navbar.css';
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src="logo" alt="logo1" />
        <FaUserLarge />
        {/* <img className='profile' src="profile" alt="profile" /> */}
    </div>
  )
}

export default Navbar;
