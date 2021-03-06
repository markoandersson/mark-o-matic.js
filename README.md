# Mark-o-matic.js

An opinionated React/Redux-project boilerplate/example bootstrapped with create-react-app, which tries to enforce good 
architectural constraints, and my opinion of React/Redux best practices.

![Node.js CI](https://github.com/markoandersson/mark-o-matic.js/workflows/Node.js%20CI/badge.svg)

## Stack

- [Redux](https://redux.js.org/), React-redux and redux-devtools - state management
- [Redux-toolkit](https://github.com/reduxjs/redux-toolkit) - reduces the Redux boilerplate
- [Redux-api-middleware](https://github.com/agraboso/redux-api-middleware) - standard way of calling external APIs
- Variation of [ducks](https://github.com/erikras/ducks-modular-redux) - Improved standard how reducer, actions and selectors are exported from the components.
- [Ant design](https://ant.design/) - Well, you'll need a UI library, right?
- [Styled components](https://www.styled-components.com/) - big boys are using this
- [React router](https://github.com/ReactTraining/react-router) - routing? yes please!

Development dependencies:
- [Dependency-cruiser](https://github.com/sverweij/dependency-cruiser) - enforce architectural constraints
- [Flow](https://flow.org/) - Static type checking for Javascript
- [Testing library for React](https://testing-library.com/) - Shallow render the React components in unit tests
- [Jest-fetch-mock](https://github.com/jefflau/jest-fetch-mock) - Mocking fetch API -calls with this library is a joy!
- [Prettier](https://prettier.io/) - You'll need to format your code in order to be a professional, right?
- [ESLint with prettier](https://prettier.io/docs/en/integrating-with-linters.html) - 

## Contribute

1. `npm install`
1. `npm run mock-backend`
1. `npm run start`

Check architectural constraints:

1. `npm run "validate dependencies"`

Run unit tests:

1. `npm run test`

## Decisions

### Static typing

I think that static typing will improve the maintainability of the software in the longer time period. I don't have that much of an experience about static 
typing in Javascript, thus I tried flow in this project. Other option would have been to learn TypeScript, which I decided to postpone.

The main purpose of flow is to statically type the most important parts of the application. Those are in my opinion the content of the store and the content of the actions
which are dispatched from the components.

### Architectural constraints

Architectural constraints have been defined as dependency-cruiser rules which should be executed at least in CI-stage. Rules will enforce following architectural decisions/constraints, which 
intend to ease up the maintainability of the software in the long run.

- Each view should be isolated from each other to allow separation of views in the future. Views may not depend on each other.
- Main application (routes, reducers, etc) may only depend on views through module exports (from index.js)
- Components can be shared between views by moving them to shared-folder and exporting them as module exports.
- There may be no circular dependencies
- Production code may not depend on test code

### Testing

This project uses React testing library which is automatically added by CRA. Testing library enforces testing behaviour instead of implementation.
All elements in the component are accessed in similar manner than user would access the components, e.g. by title, by text etc.

Tests in this project use the same redux store than the implementation components so that the whole stack will be tested (React component and redux store).

External API-calls have been mocked with `jest-fetch-mock`-library, thus the whole stack from the UI to the external service and back can be tested with single unit test.
