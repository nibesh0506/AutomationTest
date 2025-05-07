describe("Scroll", () => {
    it("Scroll Testing", () => {
        cy.visit("https://docs.cypress.io/app/get-started/why-cypress")
        cy.get("#Our-mission").scrollIntoView({duration: 3000})
        cy.get(':nth-child(44) > strong').should("contain.text",'that\nactually works')

        cy.get('h1').scrollIntoView({duration:3000})
        cy.get('h1').should('have.text','Why Cypress?')
    })
})