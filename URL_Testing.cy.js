describe("URL Test", () => {
    it("Testing for correct URL", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrm');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });
});