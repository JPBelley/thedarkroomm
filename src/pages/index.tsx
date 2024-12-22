import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HeroCarousel from "../components/hero-carousel";
import Columns from "../components/columns";



// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = () => {


  return (
    <main>
      {/* Hero */}
      <HeroCarousel />
      
      {/* Portfolio */}
      <Columns />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
