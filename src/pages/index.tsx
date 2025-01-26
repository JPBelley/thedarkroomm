import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Script } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Columns from "../components/columns";



// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = () => {


  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero>The Darkroomm</Hero>

        <div className="container container-white pt-16 rounded-b-2xl">
          
          {/* Newsletter  */}
          <h2 className="text-center mb-8">Newsletter</h2>
          <div className="ml-embedded" data-form="ndBhtT"></div>

          {/* Portfolio */}
          <h2 className="text-center my-16">Products</h2>
          <Columns />
        </div>

      </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Home Page | The Darkroomm</title>
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
  </> 
)
