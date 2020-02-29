import React from "react"
import { graphql } from "gatsby"

const SingleArticle = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query articleQuery($id: String!){
    shopifyArticle(id: {eq: $id}, comments: {elemMatch: {content: {eq: $id}}}) {
      id
      title
      image {
        src
      }
      publishedAt
      content
      url
      comments{
        content
      }
    }
  }
`

export default SingleArticle