import React from "react";
import type { PageProps } from "gatsby"
import Footer from "../footer/footer"

const Layout: React.FC<PageProps> = ({ children }) => {
    return (
        <>
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