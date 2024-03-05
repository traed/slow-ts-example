import { graphql } from "../graphql";

export const ShowFragment = graphql(`
  fragment ShowFragment on Show {
    id
    name
    uri
    episodes {
      nodes {
        id
        title
        uri
      }
    }
    showSettings {
      defaultTopic(first: 1) {
        nodes {
          id
          name
          uri
        }
      }
      defaultCreator(first: 1) {
        nodes {
          id
          name
          uri
        }
      }
      spotifyId
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
