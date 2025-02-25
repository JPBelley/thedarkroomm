import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout";
import Hero from "../../components/hero-product/hero"

const ProductPostTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  let featuredImg = frontmatter.heroImage ? 
    getImage(frontmatter.heroImage?.childImageSharp?.gatsbyImageData) : 
    getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
  
  return (
    <Layout>
      <div>
        <Hero
          title={frontmatter.title}
          image={featuredImg}
        />

        <div className="container-white pt-4 rounded-b-2xl">
          
          {/* Section 1 */}
          <div className="container-content flex w-full container flex-col md:flex-row items-center">
            <div className="column relative flex-1 w-full px-5">
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            {/* <div className="column relative flex-1 w-full min-w-[50%] max-h-[60vh] overflow-hidden"> */}
            {/* <div className="column relative flex-1 w-full min-w-[50%] lg:rounded-l-2xl overflow-hidden" controls>
              <video className="w-full" autoplay>
                <source src={`${window.location.origin}${frontmatter.video}`} type="video/mp4"></source>
              </video>
            </div> */}
          </div>
          
          {/* General content */}
          {/* <div
              dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>

      </div>
    </Layout>
  )
}

export default ProductPostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        video
        heroImage {
          childImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
      }
    }
  }
`