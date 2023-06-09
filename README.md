# Typescript Node Boilerplate

Boilerplate Node project using Typescript.

## TSConfig

- `tsconfig.node20.json` is the [recommended base tsconfig file](https://github.com/tsconfig/bases/blob/main/bases/node20.json) for Node v20 projects.
- `tsconfig.json` is extending the `tsconfig.node16.json` with my personal preferences regarding compiler options.
- [Typescript config docs](https://www.typescriptlang.org/tsconfig)

## ESLint

You can read more on how to start with ESLint for Typescript and the list of rules below:
- [Typescript ESLint docs](https://typescript-eslint.io/getting-started)
- [Typescript ESLint rule list](https://typescript-eslint.io/rules/)

The recommended starting rule sets are, which are the ones used in this project are:

- [eslint:recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts)
- [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts)
- [@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts)

:warning: Important :warning::
We also mention that below in the Prettier section, but it's [not suggested](https://typescript-eslint.io/linting/troubleshooting/formatting/#suggested-usage---prettier) to use linters for formatting:
> Neither typescript-eslint nor ESLint core enable any formatting-related rules in any recommended presets.
> However, some third party plugin configurations may still enable that bad practice.

To make sure that all formatting rules of your linter are off you can install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation).

## Prettier

> By far the biggest reason for adopting Prettier is to stop all the on-going debates over styles.

Use Prettier to take care of formatting and linter to take care of code quality. Don't use linters for formatting
because linting performance will take a big hit. From Typescript ESLint docs:

> We strongly recommend against using ESLint for formatting. We strongly recommend using Prettier, dprint, or an
> equivalent instead.

Regarding Prettier options, the general [philosophy](https://prettier.io/docs/en/option-philosophy.html) is that there
should only be a handful of options otherwise the debate shifts over to Prettier options instead of how to format.

> Yet the more options Prettier has, the further from the above goal it gets.
> The debates over styles just turn into debates over which Prettier options to use.
> Formatting wars break out with renewed vigour: “Which option values are better? Why? Did we make the right choices?”

Because of that and since I don't have any strong objection with the Prettier default options there is no need for any
overrides. Overrides can be done in the `.prettierrc.json` file.

- [Why use Prettier](https://prettier.io/docs/en/why-prettier.html)
- [Comparing linters and formatters](https://prettier.io/docs/en/comparison.html)
- [Why not use linters for formatting](https://typescript-eslint.io/linting/troubleshooting/formatting/)
- [Don't use the eslint-plugin-prettier](https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-prettier)
- [Prettier options list](https://prettier.io/docs/en/options.html)

## EditorConfig

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across
> various editors and IDEs.

- [EditorConfig](https://editorconfig.org/)
- [Full list of EditorConfig properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

## Githooks

To set up githooks we use [husky](https://typicode.github.io/husky/#/).
We use two hooks,
- one before committing which makes sure we commit only linted code and uses prettier to format it before committing
- and one before pushing that is going to run the tests and build the Typescript code.

## Testing

We use [mocha](https://www.npmjs.com/package/mocha) as our test runner, you can run all the tests by running:

```bash
npm run test
```

## Serving the app locally

You can serve the app locally by running:

```bash
npm install
npm run dev
```

Node.js needs to be installed.

## Docker

We use the [distroless](https://github.com/GoogleContainerTools/distroless) image from Google to have smaller and more secure images.

To build the container image:

```bash
docker build -t typescript-node-boilerplate .
```

To start a docker container:

```bash
docker run -p 3000:3000 typescript-node-boilerplate
```

## CI

I use [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) for CI since it's extremely easy to set it up with GitHub.
I use the [official "Setup Node.js Environment" action](https://github.com/marketplace/actions/setup-node-js-environment)
