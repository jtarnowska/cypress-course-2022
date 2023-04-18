/// <reference types="cypress" />

describe("Test Spies, Stubs and Clocks commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Spies, Stubs & Clocks title", () => {
        cy.get('.home-list > li').eq(16)
        .find('a').eq(0)
        .click();
    });

    it("Test spy", () => {
        const obj = {
            foo () {},
        }
        const spy = cy.spy(obj, 'foo').as('anyArgs')
        obj.foo()
        expect(spy).to.be.called
    });

    it("Test stub", () => {
        let obj = {
            foo () {},
        }
        const stub = cy.stub(obj, 'foo').as('foo')

        obj.foo('foo', 'bar')

        expect(stub).to.be.called
    });

    it("Test clock", () => {
        const now = new Date(Date.UTC(2017, 2, 14)).getTime()
        cy.clock(now)
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('#clock-div').click()
        .should('have.text', '1489449600')
    });

    it("Test tick", () => {
        const now = new Date(Date.UTC(2017, 2, 14)).getTime()
        cy.clock(now)
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('#tick-div').click()
        .should('have.text', '1489449600')
        cy.tick(10000)
        cy.get('#tick-div').click()
        .should('have.text', '1489449610')
    });

});