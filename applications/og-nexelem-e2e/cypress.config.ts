import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import * as webpack from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://dev.lemma.virtuslab.com/',
    specPattern: '**/*.feature',
    supportFile: 'src/support/e2e.ts',
    async setupNodeEvents(on, config): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: {
              extensions: ['.ts', '.js'],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: 'ts-loader',
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      return config;
    },
  },
});
