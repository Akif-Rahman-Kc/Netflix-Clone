import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <p><b>Home</b></p>
            <p>TV Shows</p>
            <p><b>Movies</b></p>
            <p><b>Recently Added</b></p>
            <p><b>My List</b></p>
        </div>
        <div className='right'>
            <i class="fas fa-search icon"></i>
            <p>KIDS</p>
            <p>DVD</p>
            <i class="fa-solid fa-bell icon"></i>
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        </div>
    </div>
  )
}

export default NavBar
