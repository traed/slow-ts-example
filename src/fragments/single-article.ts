import { graphql } from "../graphql";
import { EditorBlockFragment } from "./editor-blocks";
import { FeaturedImageFragment } from "./featured-image";

export const SingleArticleFragment = graphql(
  `
  fragment SingleArticleFragment on Post {
    title
    ... FeaturedImageFragment
    articleSettings {
      readTime
    }
    editorBlocks {
      __typename
      id: clientId
      parentId: parentClientId
      ... EditorBlockFragment
    }
  }
`,
  [EditorBlockFragment, FeaturedImageFragment]
);
