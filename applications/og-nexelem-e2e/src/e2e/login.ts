import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('http://dev.lemma.virtuslab.com');
});

When(
  'I login with username {string} and password {string}',
  (username: string, password: string) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login').click();
  }
);

Then('I should be logged in', () => {
  cy.url().should('include', '/um');
});
