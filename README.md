# Create React App with React App Rewired Example

This example demos a basic host application loading remote component.

- `host` is the host application (cra-based).
- `remote` standalone application (cra-based) which exposes `Button` component.
- In each of the applications the `config-overides.js` file is where the webpack file is extended to include module federation

# Running Demo
Run `npm install`.
Run `npm start`. This will build and serve both `host` and `remote` on ports 3000 and 3030 respectively.

- [localhost:3000](http://localhost:3000/) (HOST)
- [localhost:3030](http://localhost:3030/) (STANDALONE REMOTE)