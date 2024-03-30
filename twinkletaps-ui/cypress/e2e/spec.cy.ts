describe('Login Page', () => {
  it('/ redirects to /login', () => {
    cy.visit('/');
    cy.url().should('eq', pathToUrl('/login'));
  });

  it('Successful Login Redirects to /', () => {
    cy.visit('/login');
    cy.wait(500);
    cy.get('button').contains('Login').click();
    cy.url().should('eq', pathToUrl('/'));
  });
});

function pathToUrl(path: string): string {
  return Cypress.config().baseUrl + path;
}
