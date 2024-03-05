import { graphql } from "../graphql";

export const CreatorFragment = graphql(`
  fragment CreatorFragment on Creator {
    id
    name
    uri
    posts {
      nodes {
        id
        title
        uri
      }
    }
    episodes {
      nodes {
        id
        title
        uri
      }
    }
    creatorSettings {
      image {
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
  }
`);
