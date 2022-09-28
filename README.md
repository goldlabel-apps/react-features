# Features 
> @vs 0.3.2

#### Story
Say we have a feature we're calling **Help**, the `./src/features/Help` directory might contain some or all of these... Reducer, Actions, Pages, Components. 

The [cra react/redux template](https://redux-toolkit.js.org/introduction/getting-started) uses a concept of features. This is to say that all files relating to a particular concern are kept in a namespaced folder under the features directory. 

Of course there are components which need to be shared across features, so the most important Feature in this project is `Shared`.

## Install 
Installing Features to HUB and merging the code into staging is straightforward and will only required once. 

1. HUB requires these new dependencies
  - [@types/mocha](https://www.npmjs.com/package/@types/mocha)
  - [style-loader](https://www.npmjs.com/package/style-loader)
  - [css-loader](https://www.npmjs.com/package/css-loader)
  - [@types/jest](https://www.npmjs.com/package/@types/jest) 
  - [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

```bash
yarn add @reduxjs/toolkit @types/jest @types/mocha style-loader css-loader --registry https://registry.npmjs.org
```
*important* NPM is currently causing issues in HUB dependencies whereby the `--force` flag is usually needed. This is not ideal. The solution which finally worked for me was to use [yarn](https://yarnpkg.com) instead of NPM.. The `package.json` file has changed so simply running `npm install` _should just work_. But it probably won't.

2. Copy `features` directory to `./src`

3. Wire up Features in HUB
    - Add redux store `./src/`
    - Add component

5. Verify install

#### TypeScript

A TypeScript usage pattern is emerging. It currently uses definition files like this `./src/features/Features/type.ts.d`
```javascript
export type FeaturesKeyValue = {
  key: string;
  value: any;
}
```
And then imported and used in tsx like this `./src/features/Features/Shared/store/slice.ts`

```javascript
import {FeaturesKeyValue} from "../types";
...
reducers: {
    setSharedKey: (state, action: PayloadAction<FeaturesKeyValue>) => {
```

## Jest Tests

React scripts has a built in suite called Jest which can usually be run with the command `react-scripts test`. This will watch and run all the tests in the project (currently in the `./src/features/_tests_` directory) against the React code as you are developing and so gives early warnings of problems. Best practice is to run `npm test` as well as `npm start` while developing.