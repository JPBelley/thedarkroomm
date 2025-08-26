import * as React from "react"
import Logo from "../svg/Logo";

const Nav: React.FC = () => {
    const [show, setShow] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 20) {
                setTimeout(() => setShow(false), 300); // scrolling down
            } else {
                setTimeout(() => setShow(true), 300);  // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`container sticky top-4 flex px-5 z-10 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-60'}`}>
            <nav className="flex mx-auto bg-soft-black items-center justify-between border rounded-md overflow-hidden ">
                <a 
                    className="flex items-center h-14 bg-black px-3 uppercase hover:bg-soft-black transition-colors duration-200 rounded-md overflow-hidden" href="/"
                    onClick={() => sa_event("menu_home")}
                >
                    <Logo  width="40" height="60"/>
                </a>
                <div className="flex justify-end">
                    <a 
                        className="flex items-center h-14 px-6 uppercase hover:bg-black transition-colors duration-200 rounded-md" href="/products"
                        onClick={() => sa_event("menu_product")}
                    >
                        Products
                    </a>
                    <a 
                        className="flex items-center h-14 px-6 uppercase hover:bg-black transition-colors duration-200 rounded-md" href="https://thedarkroomm.gumroad.com/l/monthly-lightroom-presets" 
                        // target="_blank"
                        onClick={() => sa_event("menu_subscribe")}
                    >
                        Subscribe
                    </a>
                    <a
                        className="hidden md:flex items-center h-14 px-6 uppercase hover:bg-black transition-colors duration-200 rounded-md " href="/sell"
                        onClick={() => sa_event("menu_sell")}
                    >
                        Sell
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Nav
