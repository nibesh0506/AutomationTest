describe("Forgot Password", () => {
    it("Testing of Forgot Password", () => {
        cy.visit("https://the-internet.herokuapp.com/forgot_password")
        cy.get("#email").should("be.visible")
            .and("have.length", 1)
        cy.get("#form_submit").should("be.visible")
            .and("have.length", 1)
            .and("have.text", "Retrieve password")
            .click()
        cy.get("h1").should("have.text","Internal Server Error")
    })
})