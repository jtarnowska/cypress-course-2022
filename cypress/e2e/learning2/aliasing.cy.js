/// <reference types="cypress" />

describe("Test Aliasing command", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/')
    });

    it("Click on Aliasing title", () => {
        cy.get('.home-list > li')
        .eq(10)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test as", () => {
        cy.get('.as-table')
        .find('tbody>tr')
        .first()
        .find('td')
        .first()
        .find('button')
        .as('firstButton');

        cy.get('@firstButton')
        .click();

        cy.get('@firstButton')
        .should('have.class', 'btn-success')
        .and('contain', 'Change');
    });

});