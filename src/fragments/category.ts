import { graphql } from "../graphql";

export const CategoryFragment = graphql(`
  fragment CategoryFragment on Category {
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
  }
`);
