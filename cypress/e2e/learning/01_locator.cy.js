/// <reference types="cypress" />

describe("learn about locators", () => {

    it("visit google home page", () => {
        cy.visit("https://google.com");
    });

    it("accept google agreement", () => {
        cy.get('#L2AGLb > .QS5gu').click();
    })

    it("can locate a button on the page", () => {
        ///cy.get("input");
        ///cy.get('.gLFyf');
        ///cy.get('input[title="Suche"]');
        cy.get('[name="q"]', {timeout:5000}) 
            .should('be.visible')
            .should("have.class","gLFyf")
            .and("have.have.value", "")
            .and("have.attr","maxlength","2048");
    });
});



