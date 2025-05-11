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
            }
        });
    };

    it('adds product to cart', () => {
        login('demouser')
        cy.visit("https://bstackdemo.com");
        cy.get("div[data-sku='iPhone12-device-info.png'] div")
            .filter(":contains('Add to cart')")
            .eq(2)
            .click();

        //this allows to choose the select after the filter is used.

        cy.get('p.title').should('have.text', 'iPhone 12 Pro Max');
    });

    it('views orders and confirms empty state', () => {
        login('demouser')
        cy.visit("https://bstackdemo.com");
        cy.get("#orders").click();
        cy.get(".fit h2").should('have.text', 'No orders found');
    });
    it('make sure existing user can view orders', () => {
        login('existing_orders_user')
        cy.visit('https://bstackdemo.com')
        cy.get('#orders').click()
        cy.get('.a-fixed-left-grid-inner').should('have.length.at.least', 10)
    })
});
