## Features @vs0.3.3

The [CRA react/redux template](https://redux-toolkit.js.org/introduction/getting-started) introduces a new concept of **Features**. This is to say that all files relating to a particular concern are kept together in a namespaced folder under in features directory. Of course there are components which need to be shared across features, so the most important Feature in this project is [Shared](./docs/feature-shared.md)

For example, say we have are developing a new feature we're calling **Help**, the `./src/features/Help` directory eould contain some or all of these... redux reducer & actions, pages, components, tests etc

#### README 

- [Install to HUB](./docs/install-hub.md)
- [Install to CRA](./docs/install-cra.md)
- Features
  - [Shared](./docs/feature-shared.md)
  - [Sites](./docs/feature-sites.md)
- Read more
  - [NPM & GitHub Packages](./docs/npm.md)
  - [TypeScript](./docs/typescript.md)
  - [Jest](./docs/jest.md)
  