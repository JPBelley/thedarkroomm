import React, { useEffect, useState } from "react"

import ConconDune from '../../content/images/product-0/website-cover.jpg';
import SpanText from "../../utils/span-text";

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
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   document.fonts.ready.then(() => {
  //     setFontsLoaded(true);
  //   });
  // }, []);

  return (
    <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
      <h1 className="mt-8 mb-8">
        <SpanText 
          text={title}
          delay={.04}
        />
        {/* {title} */}
      </h1>
      {/* <p className="mb-16 text-2xl">Designed to help you create with purpose.</p> */}

      <img className="object-cover rounded-t-2xl w-full max-h-[700px]" height={2000} width={3000} src={ConconDune} alt="Lanscape preset" loading="eager"/>
    </div>
  );
}

export default Hero
