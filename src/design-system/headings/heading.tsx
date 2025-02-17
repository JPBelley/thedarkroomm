import * as React from "react"

interface HeadingType {
    level: string;
}

const Heading: React.FC<HeadingType> = ({ level, children }) => {
    const Level = level;

    return (
        <>
            {/* Headings */}
            <Level>{children}</Level>
        </>
    )
}

export default Heading
