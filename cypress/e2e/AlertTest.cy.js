describe("Alerts", () => {
    it("Alert Testing", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert")
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })
    it("Alert Confirm Testing of OK", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should("have.text", "You clicked: Ok")
    })
    it("Alert Confirm Testing of Cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on("window:confirm", () => false)
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })
    it("Alert Prompt Testing", () => {
        //   cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("welcome")
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS prompt")
        })
        cy.get("#result").should("have.text", "You entered: welcome")
    })


    it.only("Alert Prompt Testing of Cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns(null)
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS prompt")
        })
        cy.on("window:confirm", () => false)
        cy.get("#result").should("have.text", "You entered: null")
    })
})