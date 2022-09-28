## Features @vs0.3.3

The [CRA react/redux template](https://redux-toolkit.js.org/introduction/getting-started) introduces the concept of features. This is to say that all files relating to a particular concern are kept together in a namespaced folder under in features directory. Of course there are components which need to be shared across features, so the most important Feature in this project is [Shared](./docs/feature-shared.md)

Say we have a feature we're calling **Help**, the `./src/features/Help` directory might contain some or all of these... Reducer, Actions, Pages, Components.

#### README
- [Install to HUB](./docs/install-hub.md)
- [Install to CRA](./docs/install-cra.md)
- Features
  - [Shared](./docs/feature-shared.md)
  - [Sites](./docs/feature-sites.md)
- Read more
  - [TypeScript](./docs/typescript.md)
  - [Jest](./docs/jest.md)