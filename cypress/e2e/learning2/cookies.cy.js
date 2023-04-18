/// <reference types="cypress" />

describe("Test Cookies commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Cookies title", () => {
        cy.get('.home-list > li')
        .eq(15)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test getCookie", () => {
        cy.get('#getCookie .set-a-cookie')
        .click();
        cy .getCookie('token')
        .should('have.property', 'value', '123ABC');
    });

    it("Test getCookies", () => {
        cy.getCookies()
        .should('be.empty');
        cy.get('#getCookies .set-a-cookie')
        .click();
        cy.getCookies()
        .should('have.length', 1)
        .should((cookies) => {
            expect(cookies[0]).to.have.property('name', 'token')
            expect(cookies[0]).to.have.property('value', '123ABC')
            expect(cookies[0]).to.have.property('httpOnly', false)
            expect(cookies[0]).to.have.property('secure', false)
            expect(cookies[0]).to.have.property('domain')
            expect(cookies[0]).to.have.property('path')
        });
    });

    it("Test setCookie", () => {
        cy.getCookies()
        .should('be.empty');

        cy.setCookie('foo', 'bar');

        cy.getCookie('foo')
        .should('have.property', 'value', 'bar');
    });

    it("Test clearCookie", () => {
        cy.getCookie('token')
        .should('be.null');
        cy.get('#clearCookie .set-a-cookie')
        .click();
        cy.getCookie('token')
        .should('have.property', 'value', '123ABC');
        cy.clearCookie('token')
        .should('be.null');
        cy.getCookie('token')
        .should('be.null');
    });

    it("Test clearCookies", () => {
        cy.getCookies().should('be.empty');
        cy.get('#clearCookies .set-a-cookie').click();
        cy.getCookies().should('have.length', 1)
        cy.clearCookies();
        cy.getCookies().should('be.empty');
    });

});