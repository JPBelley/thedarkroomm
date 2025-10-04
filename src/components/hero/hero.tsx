import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import SpanText from "../../utils/span-text";
import BeforeAfterComparison from "../../components/before-n-after/before-n-after"

/*
 * Types
 */
interface HeroProps {
  title: string;
  image: any
  afterImage?: any
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({ title, image, afterImage }) => {
  
  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="mt-8 mb-8">
        <SpanText 
          text={title}
          delay={.04}
        />
      </h1>

      <BeforeAfterComparison image={image} afterImage={afterImage} />
      {/* <GatsbyImage
        className="object-cover rounded-2xl w-full max-h-[700px]"
        loading="eager" 
        image={image}
        alt={'Hero image'}
      /> */}
    </div>
  );
}

export default Hero
