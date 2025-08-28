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
  creator?: any;
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({ title, description, image, creator }) => {
  let creatorImg = creator ? getImage(creator.Avatar.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className={`mt-8 max-w-5xl ${!!description || !!creator ? 'mb-2 lg:mb-4' : 'mb-8 lg:mb-16'}`}>
        <SpanText
          text={title}
          delay={.04}
        />
      </h1>

      {!!creator && <div className="mb-8 lg:mb-16 flex items-center gap-4">
        <a 
          href={`/creator/${creator.Slug}`} 
          className="w-max outline-4 hover:outline duration-300 rounded-full overflow-hidden box-border"
          onClick={() => sa_event("click_creator_profile")}
        >
          <GatsbyImage
            className="hover:scale-110 duration-300 rounded-full"
            image={creatorImg}
            alt={`${creator.FirstName} ${creator.LastName}`}
          />
        </a>
        <h4 className="m-0">created by {creator.FirstName} {creator.LastName}</h4>
      </div>}
      
      {!!description && <p className="max-w-4xl text-center mx-auto mb-12 text-xl">{description}</p>}
      {!!image && <GatsbyImage 
        className="rounded-t-2xl w-full max-h-[700px]"
        loading="eager"
        image={image}
        alt={title}
      />}
    </div>
  );
}

export default Hero
