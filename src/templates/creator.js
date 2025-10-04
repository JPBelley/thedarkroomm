import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";
import Newsletter from "../components/newsletter/Newsletter";
import Columns from "../components/columns";
import Card from "../components/card/card";
import Instagram from '../components/svg/Instagram'
import Unsplash from '../components/svg/Unsplash'

const CreatorPostTemplate = ({ data }) => {
  const { strapiCreator } = data // data.markdownRemark holds your post data
  let creatorImg = getImage(strapiCreator.Avatar.localFile.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div>
        <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
          <h1 className={`mt-8 max-w-5xl mb-2 lg:mb-4`}>
            {strapiCreator.FirstName} {strapiCreator.LastName}
          </h1>
          <GatsbyImage
            className="rounded-full mb-4 lg:mb-8"
            image={creatorImg}
            alt={`${strapiCreator.FirstName} ${strapiCreator.LastName}`}
          />
          {strapiCreator.Socials && <div className="flex gap-4">
            {strapiCreator.Socials?.Instagram && <a
              className="rounded-full mb-8 lg:mb-16 border-2 flex p-1.5 hover:opacity-60 duration-300"
              href={strapiCreator.Socials.Instagram} 
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>}
            {strapiCreator.Socials?.Unsplash && <a
              className="rounded-full mb-8 lg:mb-16 border-2 flex p-1.5 hover:opacity-60 duration-300"
              href={strapiCreator.Socials.Unsplash} 
              target="_blank"
              rel="noreferrer"
            >
              <Unsplash />
            </a>}

          </div>}
        </div>

        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
            <h2 className="text-center mb-4">Products</h2>
            <Columns columns="4">
              {strapiCreator.products.map((column, i) => {
                const { featuredImage, Slug } = column;

                return (
                  <Card key={i} image={featuredImage} href={`/product/${Slug}`} itemId={Slug} />
                )
              })}
            </Columns>
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

export default CreatorPostTemplate;

export { Head } from "../seo/head"

export const pageQuery = graphql`
  query GetCreator($slug: String!) {
    strapiCreator(Slug: {eq: $slug}) {
      FirstName
      LastName
      Slug
      Socials {
        Instagram
        Unsplash
      }
      Avatar {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 150)
          }
        }
      }
      products {
        Slug
        Title
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }
  }
`