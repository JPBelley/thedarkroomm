import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero"
import Button from "../design-system/button/button";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";
import Newsletter from "../components/newsletter/Newsletter";
import RichTextRenderer from "../components/richTextRenderer/RichTextRenderer"

const ProductPostTemplate = ({ data }) => {
  const { strapiProduct } = data // data.markdownRemark holds your post data

  let featuredImg = getImage(strapiProduct.heroImage.localFile.childrenImageSharp[0].gatsbyImageData);
  
  return (
    <Layout>
      <div>
        <Hero
          title={strapiProduct.Title}
          image={featuredImg}
        />

        <div className="container-white rounded-b-2xl">

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

// export const pageQuery = graphql`
//   query GetProduct($slug: String!) {
//     strapiProduct(Slug: { eq: $slug }) {
//       Slug
//       Title
//       productLink
//       richText{
//         type
//         level
//         format
//         children {
//           text
//           children {
//             text
//           }
//         }
//       }
//       heroImage {
//         localFile {
//           childrenImageSharp {
//             gatsbyImageData(width: 1640)
//           }
//         }
//       }
//       featuredImage {
//         localFile {
//           childrenImageSharp {
//             gatsbyImageData(width: 1640)
//           }
//         }
//       }
//     }
//   }
// `