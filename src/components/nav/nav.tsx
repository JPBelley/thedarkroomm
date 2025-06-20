import * as React from "react"
import Logo from "../svg/Logo";

const Nav: React.FC = () => {
    const [show, setShow] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setTimeout(() => {
                    setShow(false); // scrolling down
                }, 500);
            } else {
                setShow(true);  // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`container sticky top-3 flex px-5 z-10 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-60'}`}>
            <nav className="flex mx-auto bg-black items-center justify-between border rounded-md overflow-hidden ">
                <a className="flex items-center h-14 px-3 uppercase hover:bg-soft-black transition-colors duration-200 rounded-md overflow-hidden" href="/">
                    <Logo  width="40" height="60"/>
                </a>
                <div className="flex justify-end">
                    <a className="flex items-center h-14 px-6 uppercase hover:bg-soft-black transition-colors duration-300 rounded-md overflow-hidden" href="/products">
                        Products
                    </a>
                    <a className="flex items-center h-14 px-6 uppercase hover:bg-soft-black transition-colors duration-300 rounded-md overflow-hidden" href="https://thedarkroomm.gumroad.com/l/monthly-lightroom-presets" target="_blank">
                        Subscribe
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Nav
