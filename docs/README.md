# Docs

- https://vitejs.dev/guide/

`npm create vite@latest example-app -- --template react-ts`

- [Cypress, React and Vite collaboration](https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc)

`npm install cypress -D`

## Run

`npx cypress open`

## Reports

`npm run test`

`npm run report:merge`

`npm run report:generate`

- [test-report.html](../src/test-reports/test-report.html)

`npm install cypress-multi-reporters --save-dev`

`npm install --save-dev mochawesome`

`npm install mochawesome-merge --save-dev`

Add [cypress-reporter-config.json](../src/cypress-reporter-config.json) with specific config.

## Formatting

`npm run lint`

`npm run lint-fix`

`npm run format`

`eslint` was already in the project.

`npm install --save-dev --save-exact prettier`
