import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import '../scss/index.scss';

import HeroImg from '../images/01-1.jpg';
import MountainImg from '../images/mountain.jpg';

const IndexPage: React.FC<PageProps> = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <main>
      <div className={`hero ${hover && ' hovered'}`}>
        <button 
          className="hero-button" 
          type="button"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          JPBelley
        </button>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[EffectFade]} effect="fade"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={HeroImg} alt="Concon Dunes" /></SwiperSlide>
          <SwiperSlide><img src={MountainImg} alt="Mountain Patagonia" /></SwiperSlide>
        </Swiper>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
