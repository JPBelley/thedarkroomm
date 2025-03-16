import * as React from "react"
import Logo from "../svg/Logo";
import { Link } from "gatsby";

const Nav: React.FC = () => {

    return (
        <nav className="flex w-full px-5 py-6 flex-col items-center justify-center">
            <Link to="/">
                <Logo />
            </Link>
        </nav>
    );
}

export default Nav
