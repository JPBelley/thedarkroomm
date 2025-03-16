import React from "react";

type LogoProps = {
    fillColor?: string;
};


const Logo = ({ fillColor = 'currentColor' }: LogoProps) => {
    return (
        <svg id="logo" width="100" height="100" viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="334" height="334" rx="32" fill="none" />
            <circle cx="167" cy="167" r="160" stroke={fillColor} stroke-width="14" />
            <circle cx="167.5" cy="166.5" r="58.5" stroke={fillColor} stroke-width="8" />
            <path id="logo-path-1" d="" fill={fillColor} />
            <path id="logo-path-2" d="" fill={fillColor} />
            <path id="logo-path-3" d="" fill={fillColor} />
            <path id="logo-path-4" d="" fill={fillColor} />
            <path id="logo-path-5" d="" fill={fillColor} />
            <path id="logo-path-6" d="" fill={fillColor} />
            <path id="logo-path-7" d="" fill={fillColor} />
            <path id="logo-path-8" d="" fill={fillColor} />
        </svg>
    );
}

export default Logo;