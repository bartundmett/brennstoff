# Stack

For the component library itself (peer dependencies):

- React
- Styled-Components
- Styled-System

Development Tooling:

- Prettier
- Typescript
- Storybook
- Playroom

Testing:

- Cypress
- Testing Library / React

Release and package management:

- changeset
- lerna

# Usage

Install components that you want to use

```bash
yarn add @brennstoff/core @brennstoff/button
```

Add Brennstoff provider around your application
and add a theme.

```javascript
import { Brennstoff } from '@brennstoff/core';
import Button from '@brennstoff/button';

const myTheme = {
  colors: {
    primary: 'black',
  },
  components: {
    ...
  }
}

function App() {
  return (
    <Brennstoff theme={myTheme}>
      <Button>My Button</Button>
    </Brennstoff>
  );
}
```

You may use the `@brennstoff/basetheme` as a starting point.

# Base commands

## Development

`yarn watch` starts watchers for all packages and opens up storybook, as well as playroom inside of storybook.
You can develop on any package and it will autorefresh all affected elements.

## Linting

`yarn lint`

## Testing

`yarn test`

## Building

`yarn build` generates TSDX builds for all packages.

# Generator for new packages

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

# Example Project

You can add '@brennstoff/package' dependencies in your project.
See example project for reference.

Start the example by using `yarn example`. Be sure to have build your packages before with `yarn build`.

# Playroom

The setup comes with a playroom for quick component composition testing.
Add your components in `playroom/components.ts` and your themes in `playroom/themes.ts`.

# Releasing

`yarn bundle` lets you select which packages to include in your release.
Select which packages get a major or minor update. If none is selected it will be a patch update.
Enter a release summary. Confirm.

The changes will be released to the npm registry (as listed inside the package.json files).
Every package will automatically create or update its CHANGELOG.md file with the release details.
Git tags for each package will be created.

You can now commit and push your changes. (dont forget to push your tags as well `git push --tags`).
