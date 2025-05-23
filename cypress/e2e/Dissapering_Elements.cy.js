describe("Disappear_elements", () => {
    it("Elements", () => {
        cy.visit("https://the-internet.herokuapp.com/disappearing_elements")
        cy.get(".example ul li").should("be.visible")
            .and("have.length",5)
        cy.contains("a","Home").should("be.visible")
            .click()
        cy.url().should("include","https://the-internet.herokuapp.com/")
        cy.get("h1").should("have.text","Welcome to the-internet")
    })
    it.only("Portfolio Elements", () => {
        cy.visit("https://the-internet.herokuapp.com/disappearing_elements")
        cy.get(".example ul li").should("be.visible")
            .and("have.length",5)
        cy.contains("a","Portfolio").should("be.visible")
            .click()
        cy.url().should("include","https://the-internet.herokuapp.com/portfolio")
        cy.get("h1").should("have.text","Not Found")
    })
})