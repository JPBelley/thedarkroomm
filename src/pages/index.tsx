import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Heading from "../design-system/headings/heading";
import HeroCarousel from "../components/hero-carousel/hero-carousel";
// import Hero from "../components/hero/hero";
import Columns from "../components/columns";



// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = () => {


  return (
    <main>
      {/* Hero */}
      {/* <Hero>JP Belley</Hero> */}
      <HeroCarousel />

      {/* Portfolio */}
      <h2 className="text-center my-16">Portfolio</h2>
      <Columns />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
