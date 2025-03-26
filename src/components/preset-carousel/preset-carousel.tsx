import React, { useState } from "react";
import type { PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../../design-system/button/button";
import Columns from "../columns";

const PresetCarousel: React.FC<PageProps> = ({ images }: any) => {
    const [activeImg, setActiveImg] = useState(0);

    console.log(activeImg);
    
    return (
        <Columns gap="0">
            <div className="column relative flex-1 w-full min-w-1/2">
                {images.map((image: any, i: number) => {
                    const classList = `w-full ${activeImg === i ? '': ' hidden'}`;

                    return (
                        <GatsbyImage 
                            key={i}
                            className={classList}
                            image={getImage(image?.childImageSharp?.gatsbyImageData)}
                            alt={''}
                        />
                    )
                })}
            </div>
            <div className="column text-center flex flex-col gap-4 align-center justify-center flex-1 w-full min-w-1/2 py-8">
                {images.map((image: any, i: number) => {
                    const buttonText = i === 0 ? "Original" : `Preset ${i}`;
                    return (
                        <div onMouseEnter={() => setActiveImg(i)}>
                            <Button
                                key={i}
                                text={buttonText}
                                color="dark"
                            />
                        </div>
                    )
                })}
            </div>
        </Columns>
    )
}

export default PresetCarousel