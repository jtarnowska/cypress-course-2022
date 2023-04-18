/// <reference types="cypress" />

describe("interacting with input field", () => {

    it("visit google home page", () => {
        cy.visit('https://google.com');
    });

    it("accept google agreement", () => {
        cy.get('#L2AGLb > .QS5gu').click();
    })

    it("click on input field", () => {

        ///const googleLogo = '.lnXdpd';
        cy.get('.lnXdpd').as('googleLogo');

        cy.get('[name="q"]').click();
        ///cy.get('.erkvQe > .OBMEnb').should('be.visible');
        cy.get("@googleLogo")
        .should('be.visible')
        .click();
        ///cy.get('.erkvQe > .OBMEnb').should('not.be.visible');
    });

    it("type bitfumes on the search input and assert suggestion", () => {
        cy.get('[name="q"]').type('bitfumes');

        const searchDropdownList = '.erkvQe > .OBMEnb > ul';

        const listElementSPECIFIC = cy.get(searchDropdownList).find('li').contains('bitfumo golden greek');
        listElementSPECIFIC.should('be.visible').click();
        cy.wait(2000);
        cy.get('#L2AGLb > .QS5gu').click();

        cy.contains('')

    });

});