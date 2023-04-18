/// <reference types="cypress" />

describe("Test location commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Location title", () => {
        cy.get('.home-list > li')
        .eq(5)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test hash", () => {
        cy.hash().should('be.empty');
    });

    it("Test location", () => {
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('https://example.cypress.io/commands/location')
            expect(location.host).to.eq('example.cypress.io')
            expect(location.hostname).to.eq('example.cypress.io')
            expect(location.origin).to.eq('https://example.cypress.io')
            expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('')
            expect(location.protocol).to.eq('https:')
            expect(location.search).to.be.empty
        });
    });

    it("Test url", () => {
        cy.url()
        .should('eq','https://example.cypress.io/commands/location');
    });

});