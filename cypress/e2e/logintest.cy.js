describe("login",()=>{
    it.only("test",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click();
        cy.url().should('contains',"https://practicetestautomation.com/logged-in-successfully/")
        cy.contains("Logged In Successfully").should('be.visible')
        cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color", { timeout: 10000 }) // Wait up to 10 seconds
            .should('be.visible')
            .and('contain', 'Log out')
        // .click()
        // cy.url().should('contains','https://practicetestautomation.com/logged-in-successfully/')
        //
        // cy.get(".menu ul li")
        //     .should("have.length",5)
        //
        // cy.contains('a','Home').should('be.visible')
        //     .click();
        //
        // cy.url().should('contains','https://practicetestautomation.com/')
        //
        // cy.get('.post-title').should('have.text','Hello')
    })
    it('Incorrect Username Test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login')
        cy.get("#username").type("Student")
        cy.get("#password").type("Password123")
            .and('have.value','Password123')
        cy.get("#submit").click()
        cy.get('#error').should('contain.text','Your username is invalid!')
            .and('be.visible')
            .and('have.text','Your username is invalid!')
    })
    it('Incorrect Password Test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login')
        cy.get("#username").type("student")
        cy.get("#password").type("password123")
        cy.get("#submit").click()
        cy.get("#error").should('be.visible')
            .and('have.text','Your password is invalid!')
    })
})