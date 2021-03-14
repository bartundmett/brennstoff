/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('should render', () => {
    cy.visit('http://localhost:1234');

    cy.get('[data-testid="test-button"]').contains('Test Button');
  });
});
