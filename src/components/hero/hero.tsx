import * as React from "react"

import ConconDune from '../../content/images/product-0/website-cover.jpg';

/*
 * Types
 */
interface HeroProps {
  title: string;
}

/*
 * Style
 */

const Hero: React.FC<HeroProps> = ({title}) => {

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="my-16">{title}</h1>
      
      <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Concon Dunes" loading="eager"/>
    </div>
  );
}

export default Hero
