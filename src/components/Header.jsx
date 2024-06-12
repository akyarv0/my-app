import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/Header.css'

const Header = () => {
  return (
    <div>
        <img className='logo' src={logo} alt="" />
        <p>Veysel SHOP</p>
    </div>
  )
}

export default Header