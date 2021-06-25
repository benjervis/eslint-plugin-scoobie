export const rules = {
  'no-src-import': {
    meta: {
      docs: {
        description:
          'Scoobie imports should be done from the top level of the package.',
      },
      fixable: 'code',
      schema: [],
      messages: {
        submodule:
          'Scoobie imports should be done from the top level of the package.',
      },
    },
    create: (context) => {
      return {
        ImportDeclaration: (node) => {
          const importSource = node.source.value;

          if (importSource === 'scoobie/src') {
            return context.report({
              node,
              messageId: 'submodule',
              fix: (fixer) => fixer.replaceText(node.source, "'scoobie'"),
            });
          }
        },
      };
    },
  },
};
