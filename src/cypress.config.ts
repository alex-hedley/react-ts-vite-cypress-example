import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://alex-hedley.github.io/react-ts-vite-example/', //'http://localhost:3000',
    excludeSpecPattern: 'cypress/e2e/wip/**.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress-reporter-config.json'
  },
  viewportWidth: 1024,
  viewportHeight: 1500,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
