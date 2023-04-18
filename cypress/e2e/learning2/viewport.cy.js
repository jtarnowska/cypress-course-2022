/// <reference types="cypress" />

describe("Test viewport command", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Viewport title", () => {
        cy.get('.home-list > li')
        .eq(4)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test viewport", () => {
        cy.get('#navbar')
        .should('be.visible');

        cy.viewport(320, 480);

        cy.get('#navbar')
        .should('not.be.visible');

        cy.get('.navbar-toggle')
        .should('be.visible')
        .click();

        cy.get('.nav')
        .find('a')
        .should('be.visible');

        cy.viewport(2999, 2999);

        cy.viewport('macbook-15');
        cy.wait(500);
        cy.viewport('macbook-13');
        cy.wait(500);
        cy.viewport('macbook-11');
        cy.wait(500);
        cy.viewport('ipad-2');
        cy.wait(500);
        cy.viewport('ipad-mini');
        cy.wait(500);
        cy.viewport('iphone-6+');

        cy.viewport('ipad-2', 'portrait');
        cy.wait(500);
        cy.viewport('iphone-4', 'landscape');
    
        
    });

});