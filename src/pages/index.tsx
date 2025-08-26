import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
// import useInView from "../utils/use-in-view";

import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Columns from "../components/columns";
import Column from "../components/column";
import MonthlyCTA from "../components/monthly-cta/monthly-cta";

// Import Swiper styles
import 'swiper/css';
import Newsletter from "../components/newsletter/Newsletter";
import FeaturedCreator from "../components/featured-creator/featured-creator";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allStrapiHomepage, allStrapiProduct: {nodes} } = data;
  const heroImgData = getImage(allStrapiHomepage.nodes[0].heroImage.localFile.childrenImageSharp[0].gatsbyImageData);
  // const [ref, isVisible] = useInView();
  
  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero
          title={allStrapiHomepage.nodes[0].Title}
          image={heroImgData}
        />

        <FeaturedCreator />

        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <Newsletter />
        </div>

        <MonthlyCTA />
        
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">

          {/* Products */}
          <h2 className="text-center mb-4">Latest products</h2>
          <p className="max-w-4xl text-center mx-auto mb-12 text-xl">Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks.</p>
          <Columns columns="3">
            {nodes.map((column: any, i: number) => {
              // const { published, slug, featuredImage } = column.node?.frontmatter;
              const { featuredImage, Slug, category } = column;
              
              return (
                // <Column key={i} image={featuredImage} href={`/product/${slug}`} itemId={slug}/>
                <Column key={i} image={featuredImage} href={`/product/${Slug}`} itemId={''} category={category.name} />
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
  query Homepage {
    allStrapiProduct(
        sort: {createdAt: DESC}
        limit: 6
      ) {
      nodes {
        Slug
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
    allStrapiHomepage {
      nodes {
        Title
        heroImage {
          localFile {
            childrenImageSharp {
              gatsbyImageData(width: 2400)
            }
          }
        }
      }
    }
  }
`;