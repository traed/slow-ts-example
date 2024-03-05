import { graphql } from "../graphql";

export const PulseOptionContentFragment = graphql(`
  fragment PulseOptionContentFragment on PulseOptionsContent {
    type
    creator {
      nodes {
        id
        name
        uri
      }
    }
    topic {
      nodes {
        id
        name
        uri
      }
    }
    link {
      node {
        id
        ... on ExternalLink {
          title
          externalLinkSettings {
            url
          }
        }
      }
    }
    show {
      nodes {
        id
        name
        uri
      }
    }
  }
`);
