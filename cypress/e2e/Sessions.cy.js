describe('Session usage example', () => {
    const login = (username) => {
        cy.session(username, () => {
            cy.visit("https://bstackdemo.com/signin");

            cy.get('#username').type(username);
            cy.get('#username').trigger('keydown', {keyCode: 9});
            cy.get('#password').type('testingisfun99\n');
            cy.get('#login-btn').click({force: true});

            cy.get('span.username', {timeout: 10000}).should('have.text', username);
        }, {
            validate() {
                cy.get(".username").should('have.text', username);
            },
        });
    };

    it('add product to cart', () => {
        login('demouser')
        cy.visit("https://bstackdemo.com");
        cy.get("div[data-sku='iPhone12-device-info.png'] div")
            .contains("Add to cart")
            .first()
            .click();

        cy.get('p.title').should('have.text', 'iPhone 12');
    });

});
