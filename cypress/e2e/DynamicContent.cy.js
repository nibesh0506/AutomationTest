describe("Dynamic_Content", () => {
    it("Content", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_content")
        cy.get(".large-2.columns img").should("exist")
            .and("be.visible")
        cy.get(".large-10.columns").should("exist")
            .and("not.be.empty")
    })

    it.only("Should change content on refresh", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_content")
        cy.get(".large-10.columns").invoke('text')
            .then((text1) => {
                cy.reload()
                cy.get('.large-10.columns').invoke('text').should((text2) => {
                    expect(text2).not.to.eq(text1);
                });
            })
    })
    it("Should change the image on refresh", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_content");
        cy.get(".large-2.columns img").invoke("attr", "src").then((srcBefore) => {
            cy.reload();
            cy.get(".large-2.columns img").invoke("attr", "src").should((srcAfter) => {
                expect(srcAfter).not.to.eq(srcBefore);
            });
        });
    });

})
