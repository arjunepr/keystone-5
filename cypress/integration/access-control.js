describe('Access Control', () => {
  describe('List', () => {
    describe('Static config', () => {
      describe('`read: false`', () => {
        it.skip('excludes from graphQL endpoint', () => {
          // TODO: Check `Logs` graphql types etc (introspection)
        });

        it.skip('excludes from Admin UI', () => {

        });

        it.skip('excludes from routing', () => {

        });
      });
    });

    describe('Dynamic config', () => {
      describe('`read: () => false`', () => {
        it.skip('still includes in graphQL endpoint', () => {
          // TODO: Check `Audit` graphql types etc - Ideally should only be
          // readable by `su` kind of user (introspection), but the current code
          // will still show them.
        });

        it.skip('errors on GraphQL access', () => {

        });

        it.skip('excludes from Admin UI', () => {
          // TODO: Login as appropriate user
        });

        it.skip('excludes from routing', () => {
          // TODO: Login as appropriate user
        });
      });

      describe('`read: () => true`', () => {
        it.skip('still includes in graphQL endpoint', () => {
          // TODO: Check `Audit` graphql types etc - Ideally should only be
          // readable by `su` kind of user (introspection), but the current code
          // will still show them.
        });

        it.skip('GraphQL access succeeds', () => {
          // TODO: Login as appropriate user
        });

        it.skip('includes in Admin UI header', () => {
          // TODO: Login as appropriate user
        });

        it.skip('includes in Admin UI home page', () => {
          // TODO: Login as appropriate user
        });

        it.skip('includes in routing', () => {
          // TODO: Login as appropriate user
        });
      });
    });
  });
});
