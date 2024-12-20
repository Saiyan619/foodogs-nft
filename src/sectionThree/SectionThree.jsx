import React from 'react'
import './sectionthree.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SectionThree = () => {
  return (
      <div id='section3'>
          <div className='hero_text_container'>
              <span className='chinese_text3'>特色狗</span>
              <h4>FEATURED DOGS</h4>
              </div>
     <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={4000}
  centerMode={false}
  className="slider_container"
              containerClass="container-with-dots"
//               customLeftArrow={<CustomLeftArrow />}
//   customRightArrow={<CustomRightArrow />}
  dotListClass=""
  draggable
  focusOnSelect={true}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <div className='slide_img_container'><img className='slide_img' src="./img1.png" alt="" /></div>
  <div className='slide_img_container'><img className='slide_img' src="./img2.png" alt="" /></div>
  <div className='slide_img_container'><img className='slide_img' src="./img3.png" alt="" /></div>
  <div className='slide_img_container'><img className='slide_img' src="./foo-dog-lion.png" alt="" /></div>
</Carousel>;
    </div>
  )
}

export default SectionThree
