import { graphql } from "../graphql";
import { PostFragment } from "./post";
import { EpisodeFragment } from "./episode";
import { ExternalLinkFragment } from "./external-link";

export const ContentTypeFragment = graphql(
  `fragment ContentTypeFragment on ContentType {
      id
      name
      uri
      contentNodes {
        nodes {
          ...PostFragment
          ...EpisodeFragment
          ...ExternalLinkFragment
        }
      }
  }`,
  [PostFragment, EpisodeFragment, ExternalLinkFragment]
);
