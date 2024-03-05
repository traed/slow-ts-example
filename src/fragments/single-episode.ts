import { graphql } from "../graphql";
import { EditorBlockFragment } from "./editor-blocks";
import { FeaturedImageFragment } from "./featured-image";

export const SingleEpisodeFragment = graphql(
  `
  fragment SingleEpisodeFragment on Episode {
    title
    ... FeaturedImageFragment
    episodeSettings {
      watchTime
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
