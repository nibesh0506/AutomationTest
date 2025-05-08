describe('Session usage example', () => {
    beforeEach(() => {
        cy.session('existing_orders_user', () => {
            cy.visit("https://bstackdemo.com/signin");

            cy.get('#username').type("existing_orders_user\n");
            cy.get('#password').type("testingisfun99\n");
            cy.get('#login-btn').click({ force: true });

            cy.get('span.username', { timeout: 10000 }).should('have.text', 'existing_orders_user');
        }, {
            validate() {

                cy.get(".username").should('have.text','existing_orders_user')

            },
        });
    });

    it('add product to cart', () => {
        cy.visit("https://bstackdemo.com");

        cy.get("div[data-sku='iPhone12-device-info.png'] div")
            .contains("Add to cart")
            .first()
            .click();

        cy.get('p.title').should('have.text', 'iPhone 12');
    });

    it('View Past orders', () => {
        cy.visit("https://bstackdemo.com");

        cy.get('#orders').click();
        cy.get(".a-fixed-left-grid-inner").should('have.length.at.least', 10);
    });
});
