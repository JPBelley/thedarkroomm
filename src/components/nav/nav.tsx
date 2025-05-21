import * as React from "react"
import Logo from "../svg/Logo";

const Nav: React.FC = () => {

    return (
        <nav className="flex w-full px-5 py-6 flex-col items-center justify-center">
            <a href="/">
                <Logo />
            </a>
        </nav>
    );
}

export default Nav
