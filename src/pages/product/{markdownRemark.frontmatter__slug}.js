import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout";
import Hero from "../../components/hero-product/hero"
import Button from "../../design-system/button/button";
import PresetCarousel from '../../components/preset-carousel/preset-carousel';
import Newsletter from "../../components/newsletter/Newsletter";

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

        <div className="container-white rounded-b-2xl">
          
          {/* Section Video */}
          {!!frontmatter.video && (
            <div className="container-content flex w-full container flex-col md:flex-row items-center">
              <div className="relative flex-1 w-full p-5 pb-12 lg:p-8 text-center">
                <h2>{frontmatter?.videoHeading}</h2>
                <Button
                  text="Buy now"
                  color="dark"
                  link={frontmatter.etsyLink}
                  target="_blank"
                  // onClick={() => sa_event("click_product")}
                />
              </div>

              <div className="relative flex flex-col justify-center flex-1 w-full min-w-[50%] aspect-square overflow-hidden" controls>
                <video className="w-full" autoPlay muted loop>
                  <source src={`${frontmatter.video}`} type="video/mp4"></source>
                </video>
              </div>
            </div>
          )}
          
          {/* Preset discovery section */}
          {frontmatter.presetCarousel && <PresetCarousel images={frontmatter.presetCarousel} />}

          <section
            className="container-content px-5 py-12 lg:py-16 mx-auto text-center max-w-4xl"
          >
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Button
              text="Buy now"
              color="dark"
              link={frontmatter.etsyLink}
              target="_blank"
              // onClick={() => sa_event("buy_now")}
            />
          </section>

          {/* Newsletter  */}
          <section className="px-5">
            <Newsletter />
          </section>
        </div>

      </div>
    </Layout>
  )
}

export default ProductPostTemplate;

export { Head } from "../../seo/head"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        etsyLink
        videoHeading
        video
        heroImage {
          childImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
        presetCarousel {
          childImageSharp {
            gatsbyImageData(width: 600)
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