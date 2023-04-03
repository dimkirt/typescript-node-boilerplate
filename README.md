# Typescript Node Boilerplate

Boilerplate project for Node using Typescript.

## TSConfig

- `tsconfig.node16.json` is the [recommended base tsconfig file](https://github.com/tsconfig/bases/blob/main/bases/node16.json) for Node v16 projects.
- `tsconfig.json` is extending the `tsconfig.node16.json` with my personal preferences regarding compiler options.
- [Typescript Config Docs](https://www.typescriptlang.org/tsconfig)

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
