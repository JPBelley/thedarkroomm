import * as React from "react"

const Footer: React.FC = () => {

    return (
        <footer className="flex w-full px-5 py-6 flex-col items-center justify-center">
            © {new Date().getFullYear()} The Darkroomm. All rights reserved.
        </footer>
    );
}

export default Footer
