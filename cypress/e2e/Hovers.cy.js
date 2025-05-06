describe("Hovers", () => {
    it("testing for the image hover", () => {
        cy.visit("https://the-internet.herokuapp.com/hovers");
        cy.get(".figure img").should("be.visible").and("have.length", 3);
        cy.get(':nth-child(3)>img').trigger('mouseover');

        cy.get(':nth-child(3) .figcaption h5')
            .should('have.text', 'name: user1');
        cy.get(':nth-child(3) .figcaption a')
            .should('contain', 'View profile').click({force: true})
        cy.url().should('include', 'https://the-internet.herokuapp.com/users/1')
        cy.get("h1").should('have.text', 'Not Found')
    });
});
