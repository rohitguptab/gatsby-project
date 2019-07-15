import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
export const pageQuery = graphql` {
  allWordpressPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        excerpt
        slug
        
      }
    }
  }
} `

const contact = (node) => (
  <Layout>
    <SEO title="Contact US" />
    <h1>Contact US</h1>
    {node.data.allWordpressPost.edges.map((data, index) => (
        <div>
          <span dangerouslySetInnerHTML={{__html: data.node.excerpt}} />
        </div>
    ))}

    {console.log(node.data.allWordpressPost.edges)}
  </Layout>
)

export default contact
