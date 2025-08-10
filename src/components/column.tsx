import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { Image } from "../project-types";

/*
 * Types
 */
interface ColumnProps {
  image: Image;
  href: string;
  itemId: number;
}

/*
 * Style
 */

const Column: React.FC<ColumnProps> = (props) => {
  const { image, href, itemId } = props
  let featuredImg = getImage(image?.localFile.childImageSharp.gatsbyImageData)
  
  return (
    <a
      href={href} 
      className={`column relative flex-1 w-full min-w-[30%] rounded overflow-hidden`}
      onClick={() =>{
        sa_event(`click_product`);
        sa_event(`click_product ${itemId}}`);
      }}
    >
      <GatsbyImage image={featuredImg} alt={''} />
    </a>
  );
}

export default Column
