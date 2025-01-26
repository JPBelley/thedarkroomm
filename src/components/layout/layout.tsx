import React from "react";
import Footer from "../footer/footer"

export default function Layout({ children }) {
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