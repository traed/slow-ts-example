import { graphql } from "../graphql";

export const PostFragment = graphql(`
  fragment PostFragment on Post {
    id
    title
    uri
    featuredImage {
      node {
        id
        altText
        mediaType
        sourceUrl
        srcSet
        mediaDetails {
          height
          width
        }
      }
    }
  }
`);
