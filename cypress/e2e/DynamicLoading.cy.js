let reload_count = 0;
describe("Dynamic Loading", () => {
    beforeEach(() => {
        cy.on("window:before:load", () => {
            reload_count++;
        })
    })

    it("Should load only for the initial visit of the page", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading")
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.url().should("include", "/dynamic_loading/1")
        cy.get("#start>button").click()
        cy.get("#finish").should("contain", "Hello World!");
        cy.wrap(null).should(() => {
            expect(reload_count).to.eq(2);
        });
    })
})