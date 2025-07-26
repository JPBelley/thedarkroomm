import React from "react"
import Columns from "../columns";
import Button from "../../design-system/button/button";
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
            }
            id
          }
        }
      }
    }
  `)

  const { name } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      {/* Featured Creator */ }
      <section className = "container-black px-5 pt-12 lg:pt-28" >
        <Columns columns="2" gap="16">
          <div className="text-left flex flex-col justify-center">
            <h2 className="mb-4">Crafted by {name}, Built for Storytelling</h2>
            {/* <p className="mb-4 text-xl">Get fresh, professionally crafted Lightroom presets delivered monthly to keep your photo style evolving. Perfect for photographers and creators who love staying inspired.</p> */}
            <div>
              <Button
                text="Buy now"
                color="dark"
                link="https://thedarkroomm.gumroad.com/l/monthly-lightroom-presets"
                target="_blank"
                onClick={() => sa_event("click_creator_product")}
              />
            </div>
          </div>
          <div>
            {/* <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={2000} src={MonthlySubscriptionImg} alt="Concon Dunes" loading="eager" /> */}
          </div>
        </Columns>
      </section>
    </>
  );
}

export default FeaturedCreator;
