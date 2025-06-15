import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="pinterest-tag"
            dangerouslySetInnerHTML={{
                __html: `
                    !function(e){if(!window.pintrk){window.pintrk = function () {
                    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
                    n=window.pintrk;n.queue=[],n.version="3.0";var
                    t=document.createElement("script");t.async=!0,t.src=e;var
                    r=document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
                    pintrk('load', '2614014687521', {em: '<user_email_address>'});
                    pintrk('page');
                `,
            }}
        />,
        <noscript key="pinterest-noscript">
            <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src="https://ct.pinterest.com/v3/?event=init&tid=2614014687521&pd[em]=<hashed_email_address>&noscript=1"
            />
        </noscript>,
    ]);
};

// const React = require("react")
// const Layout = require("./src/components/layout/layout.tsx")

// Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//     setBodyAttributes({
//         className: "my-body-class",
//     })
// }

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
// }
