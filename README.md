# @u-sho/eslint-config-vue3-ts

Vue 3 + TypeScript' s ESLint rules for u-sho.

## Installation

```shell
npm i -D eslint @u-sho/eslint-config-vue3-ts
```

## Usage

Once the `@u-sho/eslint-config-vue3-ts` package is installed, you can use it in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "@u-sho/vue3-ts",
}
```

- Check the base rules at [here](https://github.com/u-sho/eslint-config-vue3-ts/blob/main/.eslintrc.js).

### Additional rules

Your can customize rules for your project.
For example, to allow multi attributes per single line.

```json
{
  "extends": "@u-sho/vue3-ts",
  "rules": {
    "vue/max-attributes-per-line": ["warn", { "singleLine": 5 }]
  }
}
```

For more information about rules, see below documents.

- [ESLint built-in rules](https://eslint.org/docs/rules/)
- [eslint-plugin-vue rules](https://eslint.vuejs.org/rules/)
- [eslint-plugin-import rules](https://github.com/import-js/eslint-plugin-import#rules)
- [eslint-plugin-vue-scoped-css rules](https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/)
- [@typescript-eslint/eslint-plugin rules](https://typescript-eslint.io/rules/)

## License

MIT &copy; [u-sho](https://github.com/u-sho).
