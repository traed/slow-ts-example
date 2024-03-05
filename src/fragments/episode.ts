import { graphql } from "../graphql";

export const EpisodeFragment = graphql(`
  fragment EpisodeFragment on Episode {
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
