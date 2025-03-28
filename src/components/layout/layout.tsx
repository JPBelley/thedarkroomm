import React from "react";
import Footer from "../footer/footer"
import Nav from "../nav/nav";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
            {/* <!-- 100% privacy-first analytics | Simple analytics --> */ }
            <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        </>
    )
}

export default Layout