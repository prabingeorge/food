import React from 'react';
import './Navbar.css';
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={`../../assets/icons/logo-header.png`} alt="logo" />
        <FaUserLarge />
        {/* <img className='profile' src="profile" alt="profile" /> */}
    </div>
  )
}

export default Navbar;
