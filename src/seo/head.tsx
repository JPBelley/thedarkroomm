import * as React from "react"
import type { HeadFC } from "gatsby"
import { Script } from "gatsby"

export const Head: HeadFC = ({ location, params, data, pageContext }) => {
    
    return (
    <>
        <title>The Darkroomm</title>
        {/* <!-- Osano --> */}
        <Script id="osano" src="https://cmp.osano.com/ftVjNLUHak/f8da4df3-417c-42d9-b198-aa8def05e038/osano.js"></Script>
        {/* <!-- MailerLite Universal --> */}
        <Script>
            {`
                (function(w,d,e,u,f,l,n){w[f] = w[f] || function () {
                (w[f].q = w[f].q || [])
                .push(arguments);
                }, l = d.createElement(e), l.async = 1, l.src = u,
                n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                ml('account', '1253538');
            `}
        </Script>
        {/* <!-- End MailerLite Universal --> */}

        {/* <!-- Events Simply analitycs --> */}
        <Script>
            {`window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`}
        </Script>
        {/* <!-- Events Simply analitycs --> */}
    </>
)}