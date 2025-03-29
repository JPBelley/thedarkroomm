import React from "react";

type SpanTextProps = {
    text: string;
    delay: number;
};

const SpanText: React.FC<SpanTextProps> = ({ text, delay = 0.05 }) => {
    return (
        <span className="animated-letter">
            {text.split(" ").map((word, i) => (
                <span className="word" key={i}>
                    {word.split("").map((letter, j) => (
                        <span className="letter" 
                            key={j}
                            style={{ animationDelay: `${j * delay}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                    <span>&nbsp;</span>
                </span>
            ))}
            {/* {text.split("").map((char, index) => (
                <span 
                    key={index}
                    style={{ animationDelay: `${index * delay}s`}}
                >
                    {char}
                </span>
            ))} */}
        </span>
    );
};

// Usage Example
export default SpanText;
