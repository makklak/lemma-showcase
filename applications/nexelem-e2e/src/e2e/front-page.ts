export enum RouteName {
  Sales = 'sales',
  Production = 'production',
}

export class FrontPage {
  static enter() {
    cy.visit('/');
  }

  static getRouteButton(route: RouteName) {
    return cy.get(`[data-cy=go-to-${route.toLowerCase()}]`);
  }
}
