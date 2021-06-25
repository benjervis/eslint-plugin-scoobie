const rules = require('../lib/rules').rules;
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });

const srcSubmoduleImport = "import { SmartTextLink } from 'scoobie/src';";
const regularImport = "import { SmartTextLink } from 'scoobie';";
const typesImport = "import 'scoobie/types';";
const nonSrcSubmoduleImport =
  "import { robotoHtml, robotoMonoHtml } from 'scoobie/typography';";
const nonSeekScoobieImport =
  "import { SmartTextLink } from 'other-scoobie-package/sub/module';";

const rule = rules['no-src-import'];

ruleTester.run('no-src-import', rule, {
  valid: [
    regularImport,
    nonSeekScoobieImport,
    typesImport,
    nonSeekScoobieImport,
  ],
  invalid: [
    {
      code: srcSubmoduleImport,
      errors: [{ messageId: 'submodule' }],
      output: regularImport,
    },
  ],
});
