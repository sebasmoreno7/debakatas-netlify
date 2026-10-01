# React routing exercise

Small historical Create React App exercise. `src/App.js` configures a home route and a 404 fallback; `src/Home.jsx` identifies the page as a routing example. The repository also includes a Netlify configuration file; that alone does not establish an active deployment.

## Stack and status

React 16, React Router 5 and Create React App are declared in `package.json`. This is an incomplete practice project.

## Explore locally

Run `npm ci` and `npm start` from the repository root. Run `CI=true npm test -- --watch=false --runInBand` for tests. On Node 20, the historical webpack build runs with `NODE_OPTIONS=--openssl-legacy-provider npm run build`.
