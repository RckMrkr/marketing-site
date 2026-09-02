# Node 24 and Gatsby 4 Dependency Upgrade

## Scope

Upgrade the project runtime to Node.js 24 using nvm and update dependencies to the
latest releases compatible with the existing Gatsby 4 architecture.

## Design

- Set `.nvmrc` to `24`.
- Add a Node.js 24-compatible `engines.node` requirement to `package.json`.
- Update Gatsby 4 and its Gatsby-coupled plugins together, staying on their
  Gatsby 4-compatible major versions.
- Update direct dependencies where newer versions remain compatible with React 17,
  Gatsby 4, and the existing application code.
- Regenerate `package-lock.json` with npm rather than editing it manually.
- Keep React 17, `gatsby-image`, existing GraphQL image fragments, and application
  behavior unchanged. Gatsby 5 and the `gatsby-plugin-image` migration are out of
  scope.

## Validation

Use nvm with Node 24, install from the updated lockfile, and run the existing
Gatsby build command. The build must complete successfully without changing the
site's application-level APIs or image rendering model.

## Risks and Mitigations

The main risk is that newer transitive packages expose incompatibilities in the
legacy Gatsby 4 toolchain. Keeping Gatsby and its plugins on matching Gatsby 4
versions limits that risk; a failed build will identify any required direct
dependency pin or compatibility adjustment.
