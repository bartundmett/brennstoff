<div align="center">
  <h1 align="center">
    Brennstoff
  </h1>
</div>

<p align="center">
<a href="https://bundlephobia.com/result?p=@brennstoff/ui">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@brennstoff/ui?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@brennstoff/ui">
    <img alt="Types" src="https://img.shields.io/npm/types/@brennstoff/ui?style=for-the-badge&labelColor=24292e">
  </a>
<a href="https://www.npmjs.com/package/@brennstoff/ui"><img src="https://img.shields.io/npm/v/@brennstoff/ui?style=for-the-badge&labelColor=24292e"></a>
<a href="https://www.npmjs.com/package/@brennstoff/ui"><img src="https://img.shields.io/npm/l/@brennstoff/ui?style=for-the-badge&labelColor=24292e"></a>
<p>

<pre align="center">yarn add @brennstoff/ui</pre>

<hr>

## Why

Needed some component library to match my needs and have all the crazy stuff
i wanted to reuse between projects.

So here we go, contains an ui package that has all the components.
But you may use just a few by importing the individual packages.

## Quickstart

Install peer dependencies:

<pre>
yarn add styled-components styled-system
</pre>

Use in your react app:

```jsx harmony
import { Brennstoff, theme, Button } from '@brennstoff/ui';

function App() {
  return (
    <Brennstoff theme={theme}>
      <Button>Hello</Button>
    </Brennstoff>
  );
}
```

Use the default theme or provide your own.

## Under the hood

React, Styled-Components, Styled-System, Prettier, Typescript, Storybook, Playroom, Cypress, Testing Library, Changeset, Lerna

## Development

`yarn watch` starts watchers for all packages and opens up storybook, as well as playroom inside of storybook. You can develop on any package and it will autorefresh all affected elements.

## Linting

`yarn lint`

## Testing

`yarn test`

## Building

`yarn build` generates TSDX builds for all packages.

## Generator for new packages

`yarn generate`
-> Package Template
-> Name of package (does include the @brennstoff/ prefix in package scope)

Example:

```bash
yarn generate
> package
> box
```

Will generate a @brennstoff/box scoped component boilerplate in packages/box.

Add your new package to the tsconfig.json.

## Example Project

You can add '@brennstoff/package' dependencies in your project.
See example project for reference.

Start the example by using `yarn example`. Be sure to have build your packages before with `yarn build`.

## Playroom

The setup comes with a playroom for quick component composition testing.
Add your components in `playroom/components.ts` and your themes in `playroom/themes.ts`.

## Releasing

`yarn bundle` lets you select which packages to include in your release.
Select which packages get a major or minor update. If none is selected it will be a patch update.
Enter a release summary. Confirm.

The changes will be released to the npm registry (as listed inside the package.json files).
Every package will automatically create or update its CHANGELOG.md file with the release details.
Git tags for each package will be created.

You can now commit and push your changes. (dont forget to push your tags as well `git push --tags`).

## LICENSE

MIT
