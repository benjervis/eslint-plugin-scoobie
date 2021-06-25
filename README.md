# eslint-plugin-scoobie

Designed to work with projects using [scoobie](https://github.com/seek-oss/scoobie), this plugin detects when a component is being imported from a submodule.

VSCode's autoimport has a string tendency to pull from 'scoobie/src' rather than just 'scoobie', for some reason. This lint rule will error when it happens, and can also autofix.

## Usage

```bash
yarn add -D @bjervis/eslint-plugin-scoobie
```

Then in your eslint config

```
plugins: ['@bjervis/scoobie'],
rules: {
  '@bjervis/scoobie/no-submodule-import': 2,
},
```

If you're using Braid, you're probably also using [sku](https://github.com/seek-oss/sku), so:

```js
// sku.config.js
module.exports = {
  ...,
  dangerouslySetESLintConfig: (skuConfig) => ({
    ...skuConfig,
    plugins: ['@bjervis/scoobie'],
    rules: {
      '@bjervis/scoobie/no-submodule-import': 2,
    },
  }),
}
```
