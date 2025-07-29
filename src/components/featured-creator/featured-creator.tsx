import React from "react"
import Columns from "../columns";
import Button from "../../design-system/button/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const FeaturedCreator: React.FC = ({ }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/creators/" }, frontmatter: { published: { eq: true }, name: { eq: "JP Belley" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              published
              name
              productLink
              profileImage {
                childImageSharp {
                  gatsbyImageData(width: 150, layout: FIXED)
                }
              }
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  const { name, profileImage, featuredImage, productLink } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const profileImgData = getImage(profileImage.childImageSharp)
  const featuredImageData = getImage(featuredImage.childImageSharp)

  return (
    <>
      {/* Featured Creator */ }
      <section className = "container-black px-5 pt-12 lg:pt-28" >
        <Columns columns="2" gap="16">
          <div className="text-left flex flex-col justify-center gap-4">
            <GatsbyImage
              className="rounded-full"
              image={profileImgData} 
              alt={''} 
            />
            <h2 className="mt-0 mb-4">Crafted by {name}, Built for Storytelling</h2>
            <div>
              <Button
                text="Buy now"
                color="dark"
                link={productLink}
                onClick={() => sa_event("click_creator_product")}
              />
            </div>
          </div>
          <div>
            <a
              href={productLink}
              onClick={() => {
                sa_event("click_creator_product");
              }}
            >
              <GatsbyImage
                className={`rounded overflow-hidden`}
                image={featuredImageData}
                alt={''}
              />
            </a>
          </div>
        </Columns>
      </section>
    </>
  );
}

export default FeaturedCreator;
