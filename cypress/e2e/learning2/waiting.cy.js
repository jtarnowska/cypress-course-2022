/// <reference types="cypress" />

describe("Test Waiting commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Waiting title", () => {
        cy.get('.home-list > li')
        .eq(11)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test wait", () => {
        cy.get('.wait-input1')
        .type('Wait for 1000 ms after typing');
        cy.wait(1000);
        cy.get('.wait-input2')
        .type('Wait for 1000 ms after typing');
        cy.wait(1000);
        cy.get('.wait-input3')
        .type('Wait for 1000 ms after typing');
        cy.wait(1000);
    });

});