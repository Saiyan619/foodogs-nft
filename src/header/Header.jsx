import React from 'react'
import './header.css'

const Header = () => {
  return (
      <div className='header'>
          <div>
              <img className='bg_symbol' src="./hero-chinese-symbol.svg" alt="bg-img" />
              </div>
          
          <div className='hero_container'>
              <div className='hero_left_container'>
                  <h1>FOO DOGS</h1>
                  <p>Foo Dogs are 8,888 FREE* NFTs that are a part of The Lucky Club
                      collection with a ERC721 Token Standard on the Ethereum Blockchain.</p>
                  <div>
                      <button>MINT</button>
                      <button>OPENSEA</button>
                  </div>
              </div>

              <div className='hero_right_container'>
                  <img src="./foo-dog-lion.png" alt="lion_img" />
              </div>
          </div>
      </div>
  )
}

export default Header
