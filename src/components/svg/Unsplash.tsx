
import React from "react";

type UnsplashProps = {
    fillColor?: string;
    width?: string;
    height?: string;
};


const Unsplash = ({ fillColor = 'currentColor', width = '24', height= '24' }: UnsplashProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4306_317)">
                <path d="M8.625 8.0625V3H15.375V8.0625H8.625ZM15.375 10.875H21V21H3V10.875H8.625V15.9375H15.375V10.875Z" fill={fillColor} />
            </g>
            <defs>
                <clipPath id="clip0_4306_317">
                    <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                </clipPath>
            </defs>
        </svg>

    );
}

export default Unsplash;