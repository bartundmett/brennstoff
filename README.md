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
<p>
<p align="center">
<a href="https://www.npmjs.com/package/styled-components"><img src="https://img.shields.io/npm/dependency-version/@brennstoff/core/peer/styled-components?style=for-the-badge&labelColor=24292e"></a>
<a href="https://www.npmjs.com/package/styled-system"><img src="https://img.shields.io/npm/dependency-version/@brennstoff/core/peer/styled-system?style=for-the-badge&labelColor=24292e"></a>
</p>
<pre align="center">yarn add @brennstoff/ui</pre>

<hr>

Needed some component library to match my needs and have all the crazy stuff
i wanted to reuse between projects.

So here we go, contains an ui package that has all the components.
But you may use just a few by importing the individual packages.

Makes use of the beautifully crafted scales from `tailwind`
and takes it to a themable component with `styled-system` props.

E.g.:
&lt;Button&gt; has the `space` and `position` props from styled-system.
That uses the `themes` space tokens.

```js
const theme = {
  space: ['0', '0.25rem', '0.5rem'];
  ...
};
```

```jsx harmony
<Button mx={2}>Button</Button>
```

Will give the button the theme defined margin-x of 0.5rem.
All of styled systems aliases also work.

```js
const space = ['0', '0.25rem', '0.5rem'];
space.sm = space[3];
const theme = {
  space,
  ...
};
```

```jsx harmony
<Button mx="sm">Button</Button>
```

Making use of styled systems variants composition and the theming, each component comes with a set of variations that can be themed.

Our button has a `size`, `stretched` and a `variant` definition, which can be styled in the theme and also can integrate any styled that are shared accross all variations.

All of styled components/styled systems styling possibilities are available.
So you can also style pseudo selectors.

```js
const tokens = {
  space: [0, '0.25rem', '0.5rem'];
}
const theme = {
  ...tokens,
  components: {
    button: {
      shared: {
        paddingLeft: tokens.space[2],
        paddingRight: tokens.space[2],
      },
      variant: {
        primary: {
          color: tokens.colors.white,
          backgroundColor: tokens.colors.primary,
          '&:hover': {
            backgroundColor: tokens.colors.primaryLight,
          }
        },
        secondary: {
          color: tokens.colors.white,
          backgroundColor: tokens.colors.secondary,
          '&:hover': {
            backgroundColor: tokens.colors.secondaryLight,
          }
        }
      },
      size: {
        s: {
          fontSize: tokens.fontSizes.sm,
        },
        m: {
          fontSize: tokens.fontSizes.m,
        },
      },
      stretched: {
        true: {
          width: '100%',
        }
      }
    }
  }
}
```

This way we can use our component like so:

```jsx harmony
<>
  <Button size="s" variant="primary">
    Primary Button in small
  </Button>
  <Button size="m" variant="secondary">
    Secondary Button in medium
  </Button>

  <Button size="m" variant="secondary" stretched>
    Secondary Button in medium that is stretched
  </Button>

  <Button size="m" variant="secondary" mt="sm">
    Secondary Button in medium with margin prop
  </Button>
</>
```

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

React, Styled-Components, Styled-System, Prettier, Typescript, Storybook, Playroom, Cypress, Testing Library, Changeset, Lerna.

I was frustated with the development workflow so i took what i saw as the best out there to build my components. Totally opinionated :).

### Development

`yarn watch` starts watchers for all packages and opens up storybook, as well as playroom inside of storybook. You can develop on any package and it will autorefresh all affected elements.

### Linting

`yarn lint`

### Testing

`yarn test`

### Building

`yarn build` generates TSDX builds for all packages.

### Generator for new packages

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

### Example Project

You can add '@brennstoff/package' dependencies in your project.
See example project for reference.

Start the example by using `yarn example`. Be sure to have build your packages before with `yarn build`.

### Playroom

The setup comes with a playroom for quick component composition testing.
Add your components in `playroom/components.ts` and your themes in `playroom/themes.ts`.

### Releasing

`yarn bundle` lets you select which packages to include in your release.
Select which packages get a major or minor update. If none is selected it will be a patch update.
Enter a release summary. Confirm.

The changes will be released to the npm registry (as listed inside the package.json files).
Every package will automatically create or update its CHANGELOG.md file with the release details.
Git tags for each package will be created.

You can now commit and push your changes. (dont forget to push your tags as well `git push --tags`).

## LICENSE

MIT
