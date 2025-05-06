describe("JQueryUI", () => {
    it("Testing for a JQueryMenu", () => {
        cy.visit("https://the-internet.herokuapp.com/jqueryui/menu")
        cy.contains('a', 'Disabled').should('not.be.enabled')
        cy.get('#ui-id-3 > :nth-child(2)').should('be.visible').trigger('mouseover')
        cy.get('#ui-id-4 > [href="#"]').should('be.visible').trigger("mouseover")
        cy.get('#ui-id-5').invoke("show").downloadFile("https://the-internet.herokuapp.com/download/jqueryui/menu/menu.pdf", "cypress/downloads", "menu.pdf")
    })
})

