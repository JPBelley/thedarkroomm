import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero";
import Columns from "../components/columns";
import Card from "../components/card/card";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";

import Newsletter from "../components/newsletter/Newsletter";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allStrapiProduct: { nodes } } = data;

  return (
    <>
      <Layout>
        <Hero
          title='Products'
          description="Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks."
        />
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <Columns columns="4">
            {nodes.map((column: any, i: number) => {
              const { featuredImage, Slug, Title, category } = column;

              return (
                <Card
                  key={i}
                  card={column}
                  image={featuredImage}
                  href={`/product/${Slug}`}
                  itemId={''}
                  size="small"
                  category={category?.name}
                  title={Title}
                />
              )
            })}
          </Columns>

        </div>

        <MonthlyCTA />
        
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <Newsletter />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export { Head } from "../seo/head"

export const pageQuery = graphql`
  query Products {
    allStrapiProduct(
        sort: {createdAt: DESC}
      ) {
      nodes {
        Slug
        Title
        productLink
        category {
          name
        }
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
`;