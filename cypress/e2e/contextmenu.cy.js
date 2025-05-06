describe("context_menu",()=>{
    it("context_testing",()=>{
        cy.visit("https://the-internet.herokuapp.com/context_menu")
        cy.get("#hot-spot").rightclick()
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("You selected a context menu")
        })
        cy.get('h3').should('have.text', 'Context Menu')
    })
})