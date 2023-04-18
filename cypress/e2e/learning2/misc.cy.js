/// <reference types="cypress" />

describe("Test misc commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/')
    });

    it("Click on Misc title", () => {
        cy.get('.home-list > li')
        .eq(8)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test end", () => {
        cy.get('.misc-table')
        .within(() => {
            cy.contains('Cheryl')
            .click()
            .end()

            cy.contains('Charles')
            .click()
        });
    });

    it("Test exec", () => {
        cy.exec('echo Jane Lane')
        .its('stdout')
        .should('contain','Jane Lane');
    });

    it("Test focused", () => {
        cy.get('.misc-form')
        .find('#name')
        .click()

        cy.focused()
        .should('have.class','form-control');
    });

    // it("Test screenshot", () => {
    //     cy.screenshot('my-screenshot');
    // });

    it("Test wrap", () => {
        cy.wrap({foo: 'bar'})
        .should('have.property', 'foo')
        .and('include', 'bar');
    });

});