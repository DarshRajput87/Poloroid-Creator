import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="main-navbar">
            <nav className='nav'>
                <h1 className='Logo-website'>Poloroid</h1>
                <ul className="nav-links">
                    <li className="links"><a href="">Home</a></li>
                    <li className="links"><a href="">Poloroid</a></li>
                    <li className="links"><a href="">About</a></li>
                </ul>
                <button className='btn-contact'>Contact us</button>
            </nav>
        </div>
      
    </div>
  )
}
