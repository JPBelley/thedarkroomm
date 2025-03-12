import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Columns from "../components/columns";
import Column from "../components/column"

// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allMarkdownRemark: {edges} } = data 

  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero
          title="The Darkroomm"
        />

        <div className="container-white px-5 pt-12 lg:pt-24 rounded-b-2xl">

          {/* Newsletter  TODO: make a component*/}
          <h2 className="text-center mb-8">Newsletter</h2>
          <p className="max-w-4xl text-center mx-auto mb-4 text-xl">Join our newsletter and unlock a free <b>6-pack of Lightroom presets</b>—designed to make your photos stand out. Plus, get insider editing tips and VIP discounts!</p>
          <div className="text-center ml-embedded pb-12 lg:pb-32" data-form="ndBhtT"></div>

          {/* Portfolio */}
          <h2 className="text-center mb-4">Products</h2>
          <p className="max-w-4xl text-center mx-auto mb-12 text-xl">Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks.</p>
          <Columns>
            {edges.map((column: any, i: number) => {
              const { published, etsyLink, featuredImage } = column.node?.frontmatter;

              return (
                published && <Column key={i} image={featuredImage} href={etsyLink} />
              )
            })}
          </Columns>

        </div>

      </Layout>
    </>
  )
}

export default IndexPage

export { Head } from "../seo/head"

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