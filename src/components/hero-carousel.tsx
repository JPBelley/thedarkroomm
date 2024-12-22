import * as React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

// import ChevronLeft from "../assets/icons/chevron-left.svg";
// import ChevronRight from "../assets/icons/chevron-right.svg";

import ConconDune from '../images/01-1.jpg';
import MountainImg from '../images/mountain-compressed.jpg';
import Lighthouse from '../images/lighthouse.jpg';

const heroImages = [
  ConconDune, MountainImg, Lighthouse
]

/*
 * Style
 */
const swiperSlide = {
  display: 'flex',
  height: '100dvh',
  padding: '20px'
}

const HeroCarousel: React.FC = () => {
  const [hover, setHover] = React.useState(false);
  const [swiperReady, setSwiperReady] = React.useState(false);

  return (
    <div className={`hero relative flex items-center justify-center min-h-dvh${hover ? ' hovered ' : ''}${swiperReady && ' swiper-ready'}`}>
      <h1 
        className="absolute hero-button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>J</span>
        <span>P</span>
        <span>B</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>y</span>
      </h1>
      <Swiper
        className="w-full"
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        navigation={true}
        modules={[EffectFade, Navigation]}
        onInit={() => setSwiperReady(true)}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {heroImages.map((img, i) => (
          <SwiperSlide style={swiperSlide} key={i}>
            <img className="object-cover rounded w-full" src={img} alt="" loading="eager"/>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <ChevronRight className="chevron-next" /> */}
      {/* <ChevronLeft className="chevron-prev" /> */}
    </div>
  );
}

export default HeroCarousel
