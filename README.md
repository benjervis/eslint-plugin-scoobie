# eslint-plugin-scoobie

Designed to work with projects using [scoobie](https://github.com/seek-oss/scoobie), this plugin detects when a component is being imported from the `src` submodule.

VSCode's autoimport has a strong tendency to pull from 'scoobie/src' rather than just 'scoobie', for some reason. This lint rule will error when it happens, and can also autofix.

There are some [valid reasons](https://github.com/seek-oss/scoobie#srcscoobiedts) to import from certain submodules in scoobie, and this should leave those alone.

## Example

```typescript
// error
import { SmartTextLink } from 'scoobie/src';

// fixes to
import { SmartTextLink } from 'scoobie';

// ok
import 'scoobie/types';

// also ok
import { robotoHtml, robotoMonoHtml } from 'scoobie/typography';
```

## Usage

```bash
yarn add -D @bjervis/eslint-plugin-scoobie
```

Then in your eslint config

```
plugins: ['@bjervis/scoobie'],
rules: {
  '@bjervis/scoobie/no-src-import': 2,
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
      '@bjervis/scoobie/no-src-import': 2,
    },
  }),
}
```
