import * as React from "react"

interface ButtonType {
    text: string;
    color?: string;
    link?: string;
    target?: string;
}

const Button: React.FC<ButtonType> = ({ text, color = "light", link, target = "_self"}) => {
    const Tag = !link ? "button" : "a";

    return (
        <Tag 
            className={`button text-base border-2 px-8 py-2 font-bold uppercase rounded-sm button-${color}`}
            href={link}
            target={target}
        >
            {text}
        </Tag>
    )
}

export default Button
