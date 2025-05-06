describe('Custom File Download Test', () => {
    it('downloads a file', () => {
        cy.downloadFile("https://the-internet.herokuapp.com/download/learn.jpg",
            "cypress/downloads", "learn.jpg")
        // cy.readFile("cypress/downloads/learn.jpg").should('exist')
        cy.readFile("cypress/downloads/learn.jpg", 'base64')
            .then((base64String) => {
                expect(base64String).to.be.a('string')
                expect(base64String.length).to.be.greaterThan(0)
            })
    })
})