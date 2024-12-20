import React from 'react'
import './sectiontwo.css'

const SectionTwo = () => {
  return (
    <div>
               <div className='section_two_container'>
              

              <div className='section_two_container_right'>
                  <span className='chinese_text2'>幸運俱樂部</span>
                  <h3>THE LUCKY CLUB</h3>
                  <div className='sub_container'>
                      <p>A community of Asian-inspired NFT collections brought to you by your favorite artists,
                          influencers, and celebrities. Our first collection is the Lucky Buddha now available and the second in his lifelong companion,
                          Foo Dog, a free drop for Lucky Buddha owners.
                          Our third, and most exciting, has yet to be announced so stay tuned!
                      </p>
                      </div>
              </div>

              <div>
                  <img className='logo' src="./luckyclub-logo.svg" alt="logo" />
              </div>
     </div>
    </div>
  )
}

export default SectionTwo
