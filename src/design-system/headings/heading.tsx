import * as React from "react"

const Heading = ({ level, children }) => {
    const Level = level;

    return (
        <>
            {/* Headings */}
            <Level>{children}</Level>
        </>
    )
}

export default Heading
