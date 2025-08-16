import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import ConconDune from '../../content/images/product-0/website-cover.jpg';
import SpanText from "../../utils/span-text";

/*
 * Types
 */
interface HeroProps {
  title: string;
  image: any
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({title, image}) => {
  
  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="mt-8 mb-8">
        <SpanText 
          text={title}
          delay={.04}
        />
      </h1>

      <GatsbyImage
          className="object-cover rounded-2xl w-full max-h-[700px]"
          image={image}
          alt={'Hero image'}
      />
      {/* <img className="object-cover rounded-t-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Lanscape preset" loading="eager"/> */}
    </div>
  );
}

export default Hero
