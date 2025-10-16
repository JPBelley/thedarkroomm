import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero"
import Button from "../design-system/button/button";
// import PresetCarousel from '../components/preset-carousel/preset-carousel';
import MonthlyCTA from "../components/monthly-cta/monthly-cta";
import Newsletter from "../components/newsletter/Newsletter";
import RichTextRenderer from "../components/richTextRenderer/RichTextRenderer"

const ProductPostTemplate = ({ data }) => {
  const { strapiProduct } = data // data.markdownRemark holds your post data

  let heroImg = getImage(strapiProduct.heroImage.localFile.childrenImageSharp[0].gatsbyImageData);
  let heroImgAfter = strapiProduct.heroImageAfter ? getImage(strapiProduct.heroImageAfter.localFile.childrenImageSharp[0].gatsbyImageData) : null;
    
  return (
    <Layout>
      <div>
        <Hero
          title={strapiProduct.Title}
          image={heroImg}
          afterImage={heroImgAfter}
          creator={strapiProduct.creator}
        />

        <div className="container-white rounded-b-2xl">

          {/* Section Video */}
          {/* {!!frontmatter.video && (
            <div className="container-content flex w-full container flex-col md:flex-row items-center">
              <div className="relative flex-1 w-full p-5 pb-12 lg:p-8 text-center">
                <h2>{frontmatter?.videoHeading}</h2>
                <Button
                  text="Buy now"
                  color="dark"
                  link={frontmatter.productLink}
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
          )} */}

          {/* Preset discovery section */}
          {/* {frontmatter.presetCarousel && <PresetCarousel images={frontmatter.presetCarousel} />} */}

          <section
            className="container-content px-5 py-12 lg:py-16 mx-auto text-center max-w-4xl"
          >
            {strapiProduct.richText && <RichTextRenderer content={strapiProduct.richText} />}
            <Button
              text="Buy now"
              color="dark"
              link={strapiProduct.productLink}
              target="_blank"
            // onClick={() => sa_event("buy_now")}
            />
          </section>
        </div>

        <MonthlyCTA />
        
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
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

export { Head } from "../seo/head"

export const pageQuery = graphql`
  query GetProduct($slug: String!) {
    strapiProduct(Slug: { eq: $slug }) {
      Slug
      Title
      productLink
      richText{
        type
        level
        format
        children {
          text
          children {
            text
          }
        }
      }
      creator {
        Avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 75, height: 75, layout: FIXED)
            }
          }
        }
        FirstName
        LastName
        Slug
      }
      heroImage {
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
      }
      heroImageAfter {
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
      }
      featuredImage {
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 1640)
          }
        }
      }
    }
  }
`