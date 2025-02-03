import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout";
import Hero from "../../components/hero/hero"

export default function ProductPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    console.log(frontmatter)
    return (
      <Layout>
        <div>
          <Hero>
            {frontmatter.title}
          </Hero>
          {/* <h2>{frontmatter.date}</h2> */}
          <div
              dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`