/// <reference types="cypress" />

describe("Traversal", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });
    
    it("Click on Traversal", () => {
        const titleTraversal = '.home-list > :nth-child(2) > :nth-child(1)';

        cy.get(titleTraversal).click();
    });

    it("Test children", () => {
        cy.get('.col-xs-5 > .well').children('.traversal-breadcrumb').should('contain','Library');
    });

    it("Test closest", () => {
        cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class', 'list-group');
    });

    it("Test eq", () => {
        cy.get('.traversal-list > li')
        .eq(0).should('contain','tabby');
    });

    it("Test filter", () => {
        cy.get('.traversal-nav>li')
        .filter('.active')
        .should('contain','About');
    });

    it("Test find", () => {
        cy.get('.traversal-pagination')
        .find('li')
        .find('a')
        .should('have.length',7);
    });

    it("Test first", () => {
        cy.get('.traversal-table td')
        .first()
        .should('contain','1');
    });

    it("Test last", () => {
        cy.get('.traversal-buttons .btn')
        .last()
        .should('contain','Submit');
    });

    it("Test next", () => {
        cy.get('.traversal-ul')
        .contains('apples')
        .next().should('contain','oranges');
    });

    it("Test next all", () => {
        cy.get('.traversal-next-all')
        .contains('apples')
        .nextAll().should('have.length','4');
    });

    it("Test next until", () => {
        cy.get('#fruits')
        .nextUntil('#veggies');
    });

    it("Test not", () => {
        cy.get('.traversal-disabled .btn')
        .not('[disabled="disabled"]')
        .should('not.contain', 'Disabled')   
    });

    it("Test parent", () => {
        cy.get('.traversal-mark')
        .parent()
        .should('contain','Morbi leo');
    });

    it("Test parents", () => {
        cy.get('.traversal-cite')
        .parents()
        .should('match','blockquote');
    });

    it("Test parentUntil", () => {
        cy.get('.clothes-nav')
        .find('.active')
        .parentsUntil('.clothes-nav')
        .should('have.length', 2);
    });

    it("Test prev", () => {
        cy.get('.birds.list-group')
        .find('.active')
        .prev()
        .prev()
        .should('contain','Cockatiels');
    });

    it("Test prev all", () => {
        cy.get('.fruits-list > .third')
        .prevAll()
        .should('have.length','2');
    });

    it("Test prevUntil", () => {
        cy.get('.foods-list > #nuts')
        .prevUntil('#veggies');
    });

    it("Test siblings", () => {
        cy.get('.traversal-pills > .active')
        .siblings().should('have.length', 2);
    });

});