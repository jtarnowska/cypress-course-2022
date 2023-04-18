/// <reference types="cypress" />

describe("Test Theme Designer of Mysza Wiki", () => {

    before(() => {
        cy.visit('https://mysza.fandom.com/wiki/Special:ThemeDesigner');
        cy.get('.NN0_TB_DIsNmMHgJWgT7U').should('be.visible').click();
        cy.login('Jtarnowska', 'FandomMyshaJestSuper123###');
        cy.get('body').then($body => {
            if($body.find('.NN0_TB_DIsNmMHgJWgT7U').length) {
                cy.get('.NN0_TB_DIsNmMHgJWgT7U').should('be.visible').click();
            }
        });
    });

    beforeEach(() => {
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name)
            Cypress.Cookies.preserveOnce(...namesOfCookies)
        });
    });

    it("Clear the Community Title and write it once again", () => {
        cy.get('#community-title').clear()
        .type("Mysza Wiki");
    });

    it("Upload Community Logo", () => {
        cy.get('[data-test="logo-upload-empty-area-label"]').click();
    });

});