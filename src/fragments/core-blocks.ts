import { graphql } from "../graphql";

const CoreParagraphBlockFragment = graphql(`
  fragment CoreParagraphBlockFragment on CoreParagraph {
    attributes {
      cssClassName
      backgroundColor
      content
      style
      textColor
      fontSize
      fontFamily
      direction
      dropCap
      gradient
      align
    }
  }
`);

const CoreButtonBlockFragment = graphql(`
  fragment CoreButtonBlockFragment on CoreButton {
    attributes {
      anchor
      gradient
      text
      textAlign
      textColor
      style
      fontSize
      fontFamily
      linkTarget
      rel
      url
      backgroundColor
      cssClassName
      linkClassName
    }
  }
`);

const CoreButtonsBlockFragment = graphql(`
  fragment CoreButtonsBlockFragment on CoreButtons {
    attributes {
      cssClassName
      align
      anchor
      fontFamily
      fontSize
      layout
      style
    }
  }
`);

const CoreCodeBlockFragment = graphql(`
  fragment CoreCodeBlockFragment on CoreCode {
    attributes {
      anchor
      backgroundColor
      borderColor
      className
      content
      cssClassName
      fontFamily
      fontSize
      gradient
      lock
      style
      textColor
    }
  }
`);

const CoreColumnBlockFragment = graphql(`
  fragment CoreColumnBlockFragment on CoreColumn {
    attributes {
      anchor
      borderColor
      backgroundColor
      cssClassName
      fontSize
      fontFamily
      gradient
      layout
      style
      textColor
      verticalAlignment
      width
    }
  }
`);

const CoreColumnsBlockFragment = graphql(`
  fragment CoreColumnsBlockFragment on CoreColumns {
    attributes {
      align
      anchor
      layout
      cssClassName
      isStackedOnMobile
      verticalAlignment
      borderColor
      backgroundColor
      fontSize
      fontFamily
      style
      textColor
      gradient
    }
  }
`);

const CoreHeadingBlockFragment = graphql(`
  fragment CoreHeadingBlockFragment on CoreHeading {
    attributes {
      align
      anchor
      backgroundColor
      content
      fontFamily
      fontSize
      gradient
      level
      style
      textAlign
      textColor
      cssClassName
    }
  }
`);

const CoreImageBlockFragment = graphql(`
  fragment CoreImageBlockFragment on CoreImage {
    attributes {
      align
      alt
      anchor
      borderColor
      caption
      className
      width
      url
      title
      style
      src
      sizeSlug
      rel
      lock
      linkTarget
      linkDestination
      linkClass
      href
      height
      cssClassName
    }
  }
`);

const CoreListBlockFragment = graphql(`
  fragment CoreListBlockFragment on CoreList {
    attributes {
      anchor
      backgroundColor
      className
      fontFamily
      fontSize
      gradient
      lock
      ordered
      reversed
      start
      style
      textColor
      type
      values
      cssClassName
    }
  }
`);

const CoreQuoteBlockFragment = graphql(`
  fragment CoreQuoteBlockFragment on CoreQuote {
    attributes {
      align
      anchor
      backgroundColor
      citation
      className
      fontFamily
      fontSize
      gradient
      lock
      style
      textColor
      value
      cssClassName
    }
  }
`);

const CoreSeparatorBlockFragment = graphql(`
  fragment CoreSeparatorBlockFragment on CoreSeparator {
    attributes {
      align
      anchor
      opacity
      gradient
      backgroundColor
      style
      cssClassName
    }
  }
`);

export {
  CoreButtonBlockFragment,
  CoreButtonsBlockFragment,
  CoreCodeBlockFragment,
  CoreColumnBlockFragment,
  CoreColumnsBlockFragment,
  CoreHeadingBlockFragment,
  CoreImageBlockFragment,
  CoreListBlockFragment,
  CoreParagraphBlockFragment,
  CoreQuoteBlockFragment,
  CoreSeparatorBlockFragment,
};
