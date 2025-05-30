import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SpanText from "../../utils/span-text";

/*
 * Types
 */
interface HeroProps {
  title: string;
  image: any;
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({title, image}) => {

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="mt-2 mb-8 lg:mb-16 max-w-5xl">
        <SpanText
          text={title}
          delay={.04}
        />
      </h1>
      
      <GatsbyImage 
        className="rounded-t-2xl w-full max-h-[700px] min-h-[300px]"
        image={image} 
        alt={title}
      />

      {/* <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Concon Dunes" loading="eager"/> */}
    </div>
  );
}

export default Hero
