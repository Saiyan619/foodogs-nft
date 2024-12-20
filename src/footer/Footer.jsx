import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      
          <div className='footer_sub_container'>
              
              <div className="line"></div>
              
              <div>
                  <img className='footer_logo' src="./foo-dogs-logo.svg" alt="footer_logo" />
              </div>

              <div className='footer_list_container'>
                  <p className='footer_list'>STORY</p>
                  <p className='footer_list'>FEATURED DOGS</p>
                  <p className='footer_list'>ROADMAP</p>
                  <p className='footer_list'>DISCORD</p>
                  <p className='footer_list'>CREW</p>
                  <p className='footer_list'>FAQ</p>
              </div>

              <div className='footer_icon_container'>
                  <img className='footer_icon' src="./icons8-discord.svg" alt="discord" />
                  <img className='footer_icon' src="./icons8-instagram.svg" alt="discord" />
                  <img className='footer_icon' src="./icons8-twitterx (1).svg" alt="discord" />
              </div>
          </div>

          <div className="all_rights_container">
              <p>FOO DOGS ALL RIGHTS RESERVED</p>
          </div>
    </div>
  )
}

export default Footer
