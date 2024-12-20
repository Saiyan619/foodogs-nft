import React from 'react'
import './sectionone.css'
const SectionOne = () => {
  return (
    <div>
          <div className='section_1_container'>
              <div>
                  <img className='monk' src="./monk.png" alt="monk" />
              </div>

              <div className='container_right'>
                  <span className='chinese_text1'>我們的故事</span>
                  <h2>OUR STORY</h2>
                  <div className='sub_container'>
                  <p>The Foo Dog is the protector and best companion to the Lucky Buddha NFT inside The Lucky Club Collection!
                      They never leave each others side which is why we are gifting all current and future owners of the Lucky Buddha a FREE FOO DOG NFT!</p>
                  
                  <p>We want to thank everyone for being a part of The Lucky Club and we hope you are as excited as we are for the 3rd drop…
                      a surprise collection coming soon to The Lucky Club so join the discord and stay up to date for other giveaways and special announcements.</p>
                      
                      <button>DISCORD</button>
                      </div>
              </div>
     </div>
    </div>
  )
}

export default SectionOne
