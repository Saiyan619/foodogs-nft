import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import './navbar.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
  return (
      <div>
          <nav>
              <div>
                  <img className='hero_logo' src="./foo-dogs-logo.svg" alt="Logo" />
              </div>

              <div className='hamburger'>
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                  </div>

              <div className={isOpen ? 'list_and_btn_container_active' : 'list_and_btn_container'}>
              <ul>
                  <li>STORY</li>
                  <li>FEATURED DOGS</li>
                  <li>ROADMAP</li>
                  <li>DISCORD</li>
                  <li>CREW</li>
                  <li>FAQ</li>
              </ul>

              <div>
                  <button className='connect_btn'>Connect Wallet</button>
                  </div>

                 

                  </div>
          </nav>
    </div>
  )
}

export default Navbar
