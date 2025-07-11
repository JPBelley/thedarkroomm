import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SpanText from "../../utils/span-text";

/*
 * Types
 */
interface HeroProps {
  title: string;
  description?: string;
  image?: any;
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className={`mt-8 max-w-5xl ${!!description ? 'mb-2 lg:mb-4' : 'mb-8 lg:mb-16'}`}>
        <SpanText
          text={title}
          delay={.04}
        />
      </h1>
      {!!description && <p className="max-w-4xl text-center mx-auto mb-12 text-xl">{description}</p>}
      {!!image && <GatsbyImage 
        className="rounded-t-2xl w-full max-h-[700px] min-h-[300px]"
        image={image} 
        alt={title}
      />}

      {/* <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Concon Dunes" loading="eager"/> */}
    </div>
  );
}

export default Hero
