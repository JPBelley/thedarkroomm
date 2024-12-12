import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

import Columns from "../components/columns";

import ChevronLeft from "../assets/icons/chevron-left.svg";
import ChevronRight from "../assets/icons/chevron-right.svg";

// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

import ConconDune from '../images/01-1.jpg';
import MountainImg from '../images/mountain-compressed.jpg';
import Lighthouse from '../images/lighthouse.jpg';

const heroImages = [
  ConconDune, MountainImg, Lighthouse
]

const IndexPage: React.FC<PageProps> = () => {
  const [hover, setHover] = React.useState(false);
  const [swiperReady, setSwiperReady] = React.useState(false);

  return (
    <main>
      <div className={`hero ${hover && ' hovered'} ${swiperReady && ' swiper-ready'}`}>
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
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          // loop={true}
          navigation={true}
          modules={[EffectFade, Navigation]}
          onAfterInit={() => setSwiperReady(true)}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {heroImages.map((img) => (
            <SwiperSlide><img className="max-h-dvh" src={img} alt=""  loading="eager"/></SwiperSlide>
          ))}
        </Swiper>
        {/* <ChevronRight className="chevron-next" /> */}
        {/* <ChevronLeft className="chevron-prev" /> */}
      </div>

      <Columns />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
