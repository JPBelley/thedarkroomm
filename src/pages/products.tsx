import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
// import useInView from "../utils/use-in-view";

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero";
import Columns from "../components/columns";
import Column from "../components/column";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";

// Import Swiper styles
import 'swiper/css';
// import '../styles/index.scss';
import Newsletter from "../components/newsletter/Newsletter";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allMarkdownRemark: {edges} } = data 
  // const [ref, isVisible] = useInView();

  return (
    <>
      <Layout>
        <Hero
          title='Products'
          description="Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks."
        />
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <Columns columns="3">
            {edges.map((column: any, i: number) => {
              const { published, slug, featuredImage } = column.node?.frontmatter;

              return (
                published && <Column key={i} image={featuredImage} href={`/product/${slug}`} itemId={slug}/>
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            published
            slug
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