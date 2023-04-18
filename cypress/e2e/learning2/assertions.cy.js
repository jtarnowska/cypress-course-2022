/// <reference types="cypress" />

describe("Test assertions commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Assertions title", () => {
        cy.get('.home-list > li')
        .eq(7)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test should", () => {
        cy.get('.assertion-table')
        .find('tbody tr:last')
        .should('have.class','success')
        .find('td:first')
        .should('have.text','Column content')
        .should('contain','Column content')
        .should('have.html', 'Column content')
        .should('match','td')
        .invoke('text')
        .should('match',/column content/i);

        cy.get('.assertion-table')
        .find('tbody tr:last')
        .contains('td', /column content/i)
        .should('be.visible');

    });

    it("Test and", () => {
        cy.get('.assertions-link')
        .should('have.class','active')
        .and('have.attr','href')
        .and('include','cypress.io');
    });

    it("Test expect", () => {
        expect(true).to.be.true;

        const o = {foo: "bar"}
        expect(o).to.be.equal(o);
        expect(o).to.be.deep.equal({foo: "bar"});
    });

    it("Test assert", () => {
        const person = {
            name: "Joe",
            age: 20
        }
        assert.isObject(person, 'value is object');
    });

});