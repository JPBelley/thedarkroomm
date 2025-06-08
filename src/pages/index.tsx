import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
// import useInView from "../utils/use-in-view";

import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Columns from "../components/columns";
import Column from "../components/column";
import Button from "../design-system/button/button";
import MonthlySubscriptionImg from '../content/images/monthly-subscription/monthly-subcription-cover.jpg';

// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';
import Newsletter from "../components/newsletter/Newsletter";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allMarkdownRemark: {edges} } = data 
  // const [ref, isVisible] = useInView();

  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero
          title="The Darkroomm"
        />

        <div className="container-white px-5 pt-12 lg:pt-24 rounded-b-2xl">

          <Newsletter />

        </div>

        {/* Membership CTA */}
        <section className="container-black px-5 pt-12 lg:pt-28">
          <Columns columns="2" gap="16">
            <div className="text-left flex flex-col justify-center">
              <h2 className="mb-4">Elevate your edits every month.</h2>
              <p className="mb-4 text-xl">Get fresh, professionally crafted Lightroom presets delivered monthly to keep your photo style evolving. Perfect for photographers and creators who love staying inspired.</p>
              <div>
                <Button
                  text="Subscribe now"
                  color="dark"
                  link="https://thedarkroomm.gumroad.com/l/monthly-lightroom-presets"
                  target="_blank"
                  onClick={() => sa_event("buy_monthly_subscription")}
                />
              </div>
            </div>
            <div>
              <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={MonthlySubscriptionImg} alt="Concon Dunes" loading="eager" />
            </div>
          </Columns>
        </section>
        
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">

          {/* Products */}
          <h2 className="text-center mb-4">Products</h2>
          <p className="max-w-4xl text-center mx-auto mb-12 text-xl">Whether you're a beginner or a pro, our presets are designed to enhance your photos with beautiful tones and a unique style—helping you achieve the look you love with just few clicks.</p>
          <Columns columns="3">
            {edges.map((column: any, i: number) => {
              const { published, slug, featuredImage } = column.node?.frontmatter;

              return (
                published && <Column key={i} image={featuredImage} href={`/product/${slug}`} itemId={slug}/>
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