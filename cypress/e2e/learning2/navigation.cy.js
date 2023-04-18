/// <reference types="cypress" />

describe("Test navigation commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Navigation title", () => {
        cy.get('.home-list > li')
        .eq(6)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test go", () => {
        cy.location('pathname').should('include','navigation');

        cy.go('back');
        cy.location('pathname').should('not.include','navigation');

        cy.go('forward');
        cy.location('pathname').should('include','navigation');

        cy.go(-1);
        cy.location('pathname').should('not.include','navigation');

        cy.go(1);
        cy.location('pathname').should('include','navigation');
    });

    it("Test reload", () => {
        cy.reload();
    });

    it("Test visit", () => {
        cy.visit('https://example.cypress.io/commands/navigation', {
            timeout: 50000,
            onBeforeLoad: function(contentWindow){
            },
            onLoad: function(contentWindow){
            }
        })
    });

});