import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { Image } from "../project-types";

/*
 * Types
 */
interface ColumnProps {
  image: Image;
  href: string;
}

/*
 * Style
 */

const Column: React.FC<ColumnProps> = (props) => {
  const { image, href } = props
  let featuredImg = getImage(image?.childImageSharp?.gatsbyImageData)
  console.log(featuredImg);

  return (
    <a
      href={href} 
      className={`column relative flex-1 w-full min-w-[30%]`}
      onClick={() => sa_event("click_product")}
      target="_blank"
    >
      <GatsbyImage image={featuredImg} alt={''} />
      {/* <img 
        className={`rounded object-cover w-full`} 
        src={image}
      /> */}
    </a>
  );
}

export default Column
