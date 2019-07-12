import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql` {
  allWordpressPage(filter: {wordpress_id: {eq: 25}}) {
    nodes {
      content
      slug
    }
  }
} `

const about = (node) => (
  <Layout>
    {/* {console.log(node.data.allWordpressPage.nodes)} */}
    <SEO title="About US" />
    <h1>Sample Page</h1>

    {node.data.allWordpressPage.nodes.map((data, index) => (
        <div>
          <span dangerouslySetInnerHTML={{__html: data.content}} />
        </div>
    ))}
    
  </Layout>
)

export default about
