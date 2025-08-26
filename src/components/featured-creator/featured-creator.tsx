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
              productLink
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
      strapiCreator(Slug: {eq: "jp-belley"}) {
        FirstName
        LastName
        Slug
        Avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 150, layout: FIXED)
            }
          }
        }
      }
    }
  `)

  const { featuredImage, productLink } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { FirstName, LastName, Avatar, Slug } = data.strapiCreator;
  const featuredImageData = getImage(featuredImage.childImageSharp)
  const creatorImg = getImage(Avatar.localFile.childImageSharp.gatsbyImageData);

  return (
    <>
      {/* Featured Creator */ }
      <section className = "container-black px-5 pt-12 lg:pt-28">
        <h2 className="text-center mt-0 mb-12">Featured creator</h2>
        <Columns columns="2" gap="16">
          <div className="lg:text-left flex flex-col justify-center gap-4">
            <a 
              href={`/creator/${Slug}`} 
              className="mx-auto lg:mx-0 w-max outline-4 hover:outline duration-300 rounded-full overflow-hidden box-border"
              onClick={() => sa_event("click_creator_profile")}
            >
              <GatsbyImage
                className="hover:scale-110 duration-300"
                image={creatorImg} 
                alt={`${FirstName} ${LastName}`} 
              />
            </a>
            <div>
              <h2 className="mt-0 mb-4">Crafted by {FirstName} {LastName}. Built for Storytelling</h2>
              <Button
                text="See presets"
                color="dark"
                link={productLink}
                onClick={() => {
                  sa_event(`click_product`);
                  sa_event("click_creator_product")}
                }
              />
            </div>
          </div>
          <div>
            <a
              href={productLink}
              onClick={() => {
                sa_event(`click_product`);
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
