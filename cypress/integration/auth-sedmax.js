describe("Авторизация на сайте SEDMAX", function () {
  it("Авторизация при введении неверного логина и пароля", function () {
    cy.visit("https://demo.sedmax.ru/sedmax/web/ui/login");
    cy.get("#Login").type("Petrov74");
    cy.get("#Password").type("rjltrc3345");
    cy.get('[data-testid="submit_button"]').click();
    cy.get('.ant-login-alert-message').should('have.text', 'Неверные логин или пароль');
  });

  it("Авторизация при введении неверного логина", function () {
    cy.visit("https://demo.sedmax.ru/sedmax/web/ui/login");
    cy.get("#Login").type("Petrov74");
    cy.get("#Password").type("rjltrc");
    cy.get('[data-testid="submit_button"]').click();
    cy.get('.ant-login-alert-message').should('have.text', 'Неверные логин или пароль');
  });

  it("Авторизация при введении неверного пароля", function () {
    cy.visit("https://demo.sedmax.ru/sedmax/web/ui/login");
    cy.get("#Login").type("Petrov");
    cy.get("#Password").type("rjltrc3345");
    cy.get('[data-testid="submit_button"]').click();
    cy.get('.ant-login-alert-message').should('have.text', 'Неверные логин или пароль');
  });
});
