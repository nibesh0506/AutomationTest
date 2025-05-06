describe("Entry_Ad Modal Behavior", () => {
    it("should display modal on first load and not show it after closing and reloading", () => {
        cy.visit("https://the-internet.herokuapp.com/entry_ad");


        cy.get(".modal").should("be.visible");
        cy.get(".modal-title h3").should("have.text", "This is a modal window");


        cy.get(".modal-footer p").click();


        cy.get(".modal").should("not.be.visible");


        cy.reload();


        cy.get(".modal").should("not.be.visible");

        cy.get("#restart-ad").click()
        cy.get(".modal").should("be.visible")

        cy.get(".modal-title h3").should("have.text", "This is a modal window")
    });
});
