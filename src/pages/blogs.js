import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
export const pageQuery = graphql` {
  allWordpressPost {
    edges {
      node {
        slug
        title
      }
    }
  }
} `

const blogs = (node) => (
  <Layout>
    <SEO title="Contact US" />
    <h1>Blogs</h1>
    <ul>
    {node.data.allWordpressPost.edges.map((data, index) => (
        <li>
          <Link to={`${data.node.slug}`} className="clear-fix">
          {data.node.title}
        </Link>
      </li>
    ))}
    </ul>
  </Layout>
)

export default blogs
