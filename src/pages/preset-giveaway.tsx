import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero";
import Button from "../design-system/button/button";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allMarkdownRemark: {edges} } = data 

  return (
    <>
      <Layout>
        <Hero
          title='Try one of our signature looks'
        />
        <div className="container-white py-5 pt-12 lg:py-24 rounded-2xl text-center">
          <h2 className="mb-4 mx-auto">Download your free preset</h2>
          <p className="max-w-4xl mx-auto mb-4 text-xl">To celebrate the launch of our new Collection, we're giving away one of its presets</p>

          <div className="flex justify-center gap-4">
            <Button
              text="Desktop"
              color="dark"
              link="/free-preset/vintage_80_1.xmp"
              onClick={() => sa_event("download_free_preset_desktop")}
              download={true}
            />
            <Button
              text="Mobile"
              color="dark"
              link="/free-preset/vintage_80_1.dng"
              onClick={() => sa_event("download_free_preset_mobile")}
              download={true}
            />
          </div>
        </div>

        <MonthlyCTA />
        
      </Layout>
    </>
  )
}

export default IndexPage

export { Head } from "../seo/head"

export const pageQuery = graphql`
  query Products {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            published
            slug
            title
            productLink
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