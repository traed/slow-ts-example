import { graphql } from "../graphql";

export const SettingsFragment = graphql(`
  fragment SettingsFragment on GeneralSettings {
    title
    description
  }
`);

export const MenuFragment = graphql(`
  fragment MenuFragment on RootQueryToMenuItemConnection {
    nodes {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  }
`);
