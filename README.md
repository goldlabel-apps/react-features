# Features @vs0.3.2

## README

- [Install to HUB](./docs/hub-install.md)
- Features
  - [Shared](./docs/feature-shared.md)
  - [Sites](./docs/feature-sites.md)
- Read more
  - [TypeScript](./docs/typescript.md)
  - [Jest](./docs/jest.md)

### Agile Story
Say we have a feature we're calling **Help**, the `./src/features/Help` directory might contain some or all of these... Reducer, Actions, Pages, Components. 

The [cra react/redux template](https://redux-toolkit.js.org/introduction/getting-started) uses a concept of features. This is to say that all files relating to a particular concern are kept in a namespaced folder under the features directory. 

Of course there are components which need to be shared across features, so the most important _Feature_ in this project is [_Shared_](./docs/feature-shared.md)

