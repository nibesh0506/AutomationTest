describe("Secure Download", () => {
    it("Secure Download Testing", () => {
        cy.visit("https://the-internet.herokuapp.com/download_secure", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })
        cy.downloadFile("https://admin:admin@the-internet.herokuapp.com/download_secure/selenium-snapshot.png",
            "cypress/downloads", "selenium-snapshot.png")


        cy.readFile("cypress/downloads/selenium-snapshot.png", "base64")
            .then((base64) => {
                expect(base64).to.be.a('string')
                expect(base64.length).to.be.greaterThan(0)
            })


    })
})