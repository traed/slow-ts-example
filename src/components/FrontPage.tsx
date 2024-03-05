import { useQuery } from "@apollo/client";
import { FragmentOf, graphql, readFragment } from "../graphql";

import { MenuFragment, SettingsFragment } from "../fragments/general-settings";
import { ContentTypeFragment } from "../fragments/content-type";
import { SinglePageFragment } from "../fragments/single-page";
import { PulseOptionContentFragment } from "../fragments/pulse";

const query = graphql(
  `
  query GetHomePage {
    nodeByUri(uri: "/") {
      ...ContentTypeFragment
      ...SinglePageFragment
    }
    generalSettings {
      ...SettingsFragment
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      ...MenuFragment
    }
    pulse {
      pulseOptions {
        content {
          ...PulseOptionContentFragment
        }
      }
    }
  }
`,
  [
    SettingsFragment,
    MenuFragment,
    ContentTypeFragment,
    SinglePageFragment,
    PulseOptionContentFragment,
  ]
);

interface PulseLinkNode {
  id: string;
  title?: string;
  externalLinkSettings?: {
    url: string | null;
  } | null;
}

interface BasicPost {
  id: string | number;
  title: string | null;
  uri: string | null;
  externalLinkSettings?: {
    url?: string;
  };
}

type PulseItem = FragmentOf<typeof PulseOptionContentFragment> | null;

const Component = () => {
  const props = useQuery(query);

  const generalSettings = readFragment(
    SettingsFragment,
    props.data?.generalSettings
  );
  const primaryMenuItems = readFragment(
    MenuFragment,
    props.data?.primaryMenuItems
  );

  const post = readFragment(
    ContentTypeFragment,
    props.data?.nodeByUri as FragmentOf<typeof ContentTypeFragment> | null
  );
  const page = readFragment(
    SinglePageFragment,
    props.data?.nodeByUri as FragmentOf<typeof SinglePageFragment> | null
  );

  const pulse = readFragment(
    PulseOptionContentFragment,
    props.data?.pulse?.pulseOptions?.content
  );

  const posts = post?.contentNodes?.nodes as BasicPost[] | null;

  const renderPulseItem = (item: PulseItem): JSX.Element => {
    let uri = "";
    let name = "";

    const content = readFragment(PulseOptionContentFragment, item);

    if (content === null) {
      return <span />;
    }

    switch (content.type ?? "") {
      case "link":
        uri =
          (content.link?.node as PulseLinkNode).externalLinkSettings?.url ?? "";
        name = (content.link?.node as PulseLinkNode).title ?? "";
        break;
      case "show":
        uri = content.show?.nodes[0].uri ?? "";
        name = content.show?.nodes[0].name ?? "";
        break;
      case "topic":
        uri = content.topic?.nodes[0].uri ?? "";
        name = content.topic?.nodes[0].name ?? "";
        break;
      case "creator":
        uri = content.creator?.nodes[0].uri ?? "";
        name = content.creator?.nodes[0].name ?? "";
        break;
    }

    if (!uri || !name) {
      return <span />;
    }

    return <a href={uri}>{name}</a>;
  };

  const pulseItemId = (item: PulseItem): string => {
    let id: string | number = "";

    const content = readFragment(PulseOptionContentFragment, item);

    switch (content?.type ?? "") {
      case "link":
        id = (content?.link?.node as PulseLinkNode).id;
        break;
      case "show":
        id = content?.show?.nodes[0].id ?? "";
        break;
      case "topic":
        id = content?.topic?.nodes[0].id ?? "";
        break;
      case "creator":
        id = content?.creator?.nodes[0].id ?? "";
        break;
    }

    return `${id}`;
  };

  return (
    <>
      <header>
        <div>
          <div>
            <a href="/">
              {generalSettings?.title}
            </a>
            <p>{generalSettings?.description}</p>
          </div>
        </div>
        <ul>
          {primaryMenuItems?.nodes.map((item) => <li key={item.id}>{item.label}</li>)}
        </ul>
      </header>

      <main className="container">
        <ul className="flex gap-2 py-4" id="the-pulse">
          {pulse?.map((item) => (
            <li
              className="border px-2 py-1 rounded"
              key={pulseItemId(item as PulseItem)}
            >
              {renderPulseItem(item as PulseItem)}
            </li>
          ))}
        </ul>

        {Array.isArray(posts) && (
          posts.map((p) => (
            <a href={p.externalLinkSettings?.url || p.uri || "#"} key={p.id}>
              <li>{p.title}</li>
            </a>
          ))
        )}
      </main>
    </>
  );
};

Component.query = query;

export default Component;
