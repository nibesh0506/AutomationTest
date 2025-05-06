describe("Upload File",()=>{
    it("Uploading a file",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').click().selectFile("cypress/downloads/learn.jpg")
        cy.get("#file-upload").should("have.length",1)
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','https://the-internet.herokuapp.com/upload')
        cy.get('#uploaded-files').should('contain','learn.jpg')
    })
})