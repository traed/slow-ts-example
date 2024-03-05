# Slow TS example

This is an example repo containing a simple react app and [gql.tada](https://github.com/0no-co/gql.tada).

It attempts to demonstrate degraded performance of TS inference as described [in this issue](https://github.com/0no-co/GraphQLSP/issues/254).

## Running the project
0. Make sure pnpm is installed on your machine
1. Run pnpm install
2. Make changes in a TS file, e.g. `src/components/FrontPage.tsx`. Type errors take a couple of seconds to appear.