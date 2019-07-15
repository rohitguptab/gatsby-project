import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql` {
  allWordpressPage(filter: {wordpress_id: {eq: 25}}) {
    nodes {
      content
      slug
      title
    }
  }
} `

const about = (node) => (
  <Layout>
    {/* {console.log(node.data.allWordpressPage.nodes)} */}
    <SEO title="About US" />
    {node.data.allWordpressPage.nodes.map((data, index) => (
        <div>
          <h1>{data.title}</h1>
          <span dangerouslySetInnerHTML={{__html: data.content}} />
        </div>
    ))}
    
  </Layout>
)

export default about
