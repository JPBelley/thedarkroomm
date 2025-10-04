import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { Image } from "../../project-types";

/*
 * Types
 */
interface CardProps {
  image: Image;
  href: string;
  title: string;
  itemId: number;
  category?: string;
  card: any;
  size?: "small" | "medium" | "large";
}

/*
 * Style
 */

const Card: React.FC<CardProps> = (props) => {
  const { image, href, itemId, category, title, size = "medium" } = props;
  let featuredImg = getImage(image?.localFile.childImageSharp.gatsbyImageData)

  return (
    <a
      href={href} 
      className={`card relative flex-1 w-full min-w-[30%] rounded overflow-hidden flex justify-center items-center ${size}`}
      onClick={() =>{
        sa_event(`click_product`);
        sa_event(`click_product ${itemId}}`);
      }}
    >
      <div className="overlay"></div>
      <div className={`card-info absolute z-10 text-white uppercase flex flex-col items-center tracking-tight`}>
        {category && <h3 
          className="category m-0"
          >
            {category}
          </h3>
        }
        <p className="card-title font-bold relative">{title}</p>
      </div>
      <GatsbyImage image={featuredImg} alt={''} />
    </a>
  );
}

export default Card
