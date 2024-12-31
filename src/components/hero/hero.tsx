import * as React from "react"

import ConconDune from '../../images/01-1.jpg';

/*
 * Types
 */
interface HeroProps {
  children: string;
}

/*
 * Style
 */

const HeroCarousel: React.FC<HeroProps> = ({children}) => {

  return (
    <div className={`hero relative flex items-center justify-center flex-col`}>
      <h1>{children}</h1>

      <img className="object-cover rounded w-full" src={ConconDune} alt="Concon Dunes" loading="eager"/>
    </div>
  );
}

export default HeroCarousel
