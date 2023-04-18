/// <reference types="cypress" />

describe("Test window commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Window title", () => {
        cy.get('.home-list > li')
        .eq(3)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test window", () => {
        cy.window()
        .should
        ('have.property','top');
    });



});