import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
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

const IndexPage = (node) => (
  <Layout style={{minHeight: `calc(100vh - 247px)`}}>
  {/* {console.log(node.data.allWordpressPost.edges)} */}
    <SEO title="Home" />
    <h1>Latest Posts</h1>
    <p>Welcome to your new Gatsby site.Now go build something great Now go build something great. Welcome to your new Gatsby site.Now go build something great Now go build something great. Welcome to your new Gatsby site.Now go build something great Now go build something great.</p>
    <p>Welcome to your new Gatsby site.Now go build something great Now go build something great. Welcome to your new Gatsby site.Now go build something great Now go build something great. Welcome to your new Gatsby site.Now go build something great Now go build something great.</p>
    
    {node.data.allWordpressPost.edges.map((data, index) => (
        <div>
          <h2>{data.node.title}</h2>
          <span dangerouslySetInnerHTML={{__html: data.node.excerpt}} />
        </div>
    ))}

  </Layout>
)



export default IndexPage
