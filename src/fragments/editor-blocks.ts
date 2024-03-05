import { graphql } from "../graphql";
import { fragment as TweetFragment } from "../wp-blocks/tweet";
import { fragment as ColorFragment } from "../wp-blocks/color";
import { fragment as SearchFragment } from "../wp-blocks/search";
import * as core from "./core-blocks";

export const EditorBlockFragment = graphql(
  `
  fragment EditorBlockFragment on EditorBlock {
    ... CoreParagraphBlockFragment
    ... CoreButtonBlockFragment
    ... CoreButtonsBlockFragment
    ... CoreCodeBlockFragment
    ... CoreColumnBlockFragment
    ... CoreColumnsBlockFragment
    ... CoreHeadingBlockFragment
    ... CoreImageBlockFragment
    ... CoreListBlockFragment
    ... CoreQuoteBlockFragment
    ... CoreSeparatorBlockFragment
    ... RingerBlocksTweetFragment
    ... RingerBlocksColorFragment
    ... RingerBlocksSearchFragment
  }
`,
  [
    core.CoreParagraphBlockFragment,
    core.CoreButtonBlockFragment,
    core.CoreButtonsBlockFragment,
    core.CoreCodeBlockFragment,
    core.CoreColumnBlockFragment,
    core.CoreColumnsBlockFragment,
    core.CoreHeadingBlockFragment,
    core.CoreImageBlockFragment,
    core.CoreListBlockFragment,
    core.CoreQuoteBlockFragment,
    core.CoreSeparatorBlockFragment,
    TweetFragment,
    ColorFragment,
    SearchFragment,
  ]
);
