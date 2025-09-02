import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase.js'

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80){
        navRef.current.classList.add('navDark');
      }
      else{
        navRef.current.classList.remove('navDark');
      }
    });
  })
  return (
    <div className='navbar' ref = {navRef}>
      <div className="navbar-left">
        <img src={Logo} alt='' ></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} className='icons' />
        <p>Children</p>
        <img src={bell_icon} className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} />
          <img src={caret_icon} />
          <div className="dropdown">
            <p onClick={async () => {
                await logout();
                console.log("User logged out");
            }}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
