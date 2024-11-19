import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../scss/index.scss';

import HeroImg from '../images/01-1.jpg';

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
        <img src={HeroImg} alt="Concon Dunes"/>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
