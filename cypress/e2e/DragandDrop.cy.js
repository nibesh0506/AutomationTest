describe("Drag_and_Drop", () => {
    it("Testing of a drag and drop operations of frames without plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        const dataTransfer = new DataTransfer();

        cy.get("#column-a")
            .trigger("dragstart", {dataTransfer})
            .trigger("drag",{dataTransfer})

        cy.get("#column-b")
            .trigger("dragenter", {dataTransfer})
            .trigger("dragover", {dataTransfer})
            .trigger("drop",{dataTransfer})

        cy.get("#column-a")
            .trigger("dragend", {dataTransfer})

        cy.get("#column-b").should("have.text",'A')
        cy.get("#column-a").should("have.text",'B')
    })
})