describe("Basic Auth Test", () => {
    it("Should load the page with Basic Auth", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        });
        cy.get(".example>p").contains("Congratulations! You must have the proper credentials.")
    });

    it("broken images", () => {
        cy.visit("https://the-internet.herokuapp.com/broken_images")
        cy.get(".example>img").should("have.length", 3)
            .and("be.visible")
    })
    it("checkboxes", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        // cy.get("input[type='checkbox']").uncheck()
        cy.get("input[type='checkbox']").check().should("be.checked")
        cy.get("input[type='checkbox']").eq(1).uncheck().should("not.be.checked")
    })
    it.only("Dropdown", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("#dropdown")
            .select("Option 2")
            .should("have.value","2")
    })
});
