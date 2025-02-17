import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Script, graphql } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Columns from "../components/columns";



// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allMarkdownRemark: {edges} } = data 

  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero>
          The Darkroomm
        </Hero>

        <div className="container-white pt-16 rounded-b-2xl">

          {/* Portfolio */}
          <h2 className="text-center mt-16 mb-4">Products</h2>
          <p className="max-w-4xl text-center mx-auto mb-12">Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks.</p>
          <Columns columns={edges} />
          
          {/* Newsletter  */}
          <h2 className="text-center mb-8">Newsletter</h2>
          <div className="ml-embedded pb-32" data-form="ndBhtT"></div>

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

    {/* <!-- Events Simply analitycs --> */}
    <Script>
      {`window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`}
    </Script>
    {/* <!-- Events Simply analitycs --> */}
  </> 
)

export const pageQuery = graphql`
  query Products {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            published
            title
            etsyLink
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`;