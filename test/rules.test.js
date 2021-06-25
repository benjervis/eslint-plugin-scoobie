const rules = require('../lib/rules').rules;
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });

const submoduleImport = "import { SmartTextLink } from 'scoobie/src';";
const regularImport = "import { SmartTextLink } from 'scoobie';";
const nonSeekScoobieImport =
  "import { SmartTextLink } from 'other-scoobie-package/sub/module';";

const rule = rules['no-submodule-imports'];

ruleTester.run('no-submodule-import', rule, {
  valid: [regularImport, nonSeekScoobieImport],
  invalid: [
    {
      code: submoduleImport,
      errors: [{ messageId: 'submodule' }],
      output: regularImport,
    },
  ],
});
