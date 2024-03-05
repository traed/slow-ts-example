import { graphql } from "../graphql";

export const FeaturedImageFragment = graphql(`
	fragment FeaturedImageFragment on NodeWithFeaturedImage {
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
