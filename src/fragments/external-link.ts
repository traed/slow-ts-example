import { graphql } from "../graphql";

export const ExternalLinkFragment = graphql(`
  fragment ExternalLinkFragment on ExternalLink {
    id
    title
    uri
    externalLinkSettings {
      url
    }
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
