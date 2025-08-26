import React from "react";

const Newsletter: React.FC = () => {
    React.useEffect(() => {
        
        function gtag_report_conversion(url) {
            // var callback = function () {
            //     if (typeof (url) != 'undefined') {
            //         window.location = url;
            //     }
            // };
            if (typeof gtag !== 'undefined') { 
                console.log('Form filled');
                
                gtag('event', 'conversion', {
                    'send_to': 'AW-17489591823/q0ZICN7k6IsbEI_815NB',
                    // 'event_callback': callback
                });
            };
            return false;
        }

        // Attach global listener (capture phase)
        document.addEventListener("submit", gtag_report_conversion, true);

        // Cleanup on unmount
        return () => {
            document.removeEventListener("submit", gtag_report_conversion, true);
        };
    }, []);
    
    return (
        <>
            {/* Newsletter  TODO: make a component*/}
            <h2 className={`text-center mb-8`} >Newsletter</h2>
            <p className="max-w-2xl text-center mx-auto mb-4 text-xl">Join our newsletter and unlock a free <b>6-pack of Lightroom presets</b> designed to make your photos stand out.</p>
            <div className="text-center ml-embedded pb-12 lg:pb-32 min-h-[236px] lg:min-h-[316px]" data-form="ndBhtT"></div>
        </>
    )
}

export default Newsletter