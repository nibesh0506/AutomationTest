describe("Drag-n-Drop_FileUpload", () => {
    it("File Upload by Dragging", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload")
            .attachFile('menu.pdf', {subjectType: "drag-n-drop"})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename')
            .should('have.text', 'menu.pdf')
    })


    // Checking for renaming a file in it......
    it.only('Renaming a file in it', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload")
            .attachFile({filePath: 'menu.pdf', fileName: 'menu1.pdf'}, {subjectType: 'drag-n-drop'})

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .should('have.text', 'menu1.pdf')
    })
})