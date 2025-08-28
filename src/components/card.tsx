import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { Image } from "../project-types";

/*
 * Types
 */
interface CardProps {
  image: Image;
  href: string;
  itemId: number;
  category?: string;
}

/*
 * Style
 */

const Card: React.FC<CardProps> = (props) => {
  const { image, href, itemId, category } = props
  let featuredImg = getImage(image?.localFile.childImageSharp.gatsbyImageData)

  return (
    <a
      href={href} 
      className={`card relative flex-1 w-full min-w-[30%] rounded overflow-hidden flex justify-center items-center`}
      onClick={() =>{
        sa_event(`click_product`);
        sa_event(`click_product ${itemId}}`);
      }}
    >
      {/* {category && <h3 
        className="absolute z-10 text-white m-0 uppercase"
        >
          {category}
        </h3>
      } */}
      <GatsbyImage image={featuredImg} alt={''} />
    </a>
  );
}

export default Card
