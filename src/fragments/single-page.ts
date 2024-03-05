import { graphql } from "../graphql";
import { EditorBlockFragment } from "./editor-blocks";
import { FeaturedImageFragment } from "./featured-image";

export const SinglePageFragment = graphql(
  `
  fragment SinglePageFragment on Page {
    title
    ... FeaturedImageFragment
    editorBlocks {
      id: clientId
      parentId: parentClientId
      __typename
      ... EditorBlockFragment
    }
  }
`,
  [EditorBlockFragment, FeaturedImageFragment]
);
