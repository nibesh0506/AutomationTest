describe("Dynamic_Control", () => {
    it("Testing for the dynamic content", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_controls");
        cy.get('input[type="checkbox"]').check().should("be.checked");
        cy.get("#checkbox-example>button").should("have.text", "Remove").click();
        cy.get("#message").should("have.text", "It's gone!");
        cy.get("#checkbox").should("not.exist");
        cy.get("#checkbox-example>button").should("have.text", "Add").click();
        cy.get("#message").should("have.text", "It's back!");
        cy.get("#checkbox").should("exist");
        cy.get('input[type="checkbox"]').should("have.length", 1).and("be.visible");
    });
});
