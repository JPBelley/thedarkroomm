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

const Hero: React.FC<HeroProps> = ({children}) => {

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="my-16">{children}</h1>
      
      <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Concon Dunes" loading="eager"/>
    </div>
  );
}

export default Hero
