import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

import { FrontPage, RouteName } from './front-page';

When('User visits front page', () => {
  FrontPage.enter();
});

When('User changes page to {string}', (page: RouteName) => {
  FrontPage.getRouteButton(page).click();
});

Then('User should see the {string} page', (page: string) => {
  cy.contains(`${page} dashboard works!`, {
    matchCase: false,
  });
});
