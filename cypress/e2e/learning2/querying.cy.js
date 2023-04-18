/// <reference types="cypress" />
import { searchButton } from './mainPage.cy';

describe("Commands test on cypress examples", () => {

    it("Visit page example.cypress.io", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Find topic Querying and open it", () => {
        const titleQuerying = ':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)';
        
        cy.get(titleQuerying)
        .should('be.visible')
        .click();
    });

    ///it("Find button 'Button'", () => {
       /// const buttonButton = '[id="query-btn"]';
        ///cy.get(buttonButton)
        ///.should('contain','Button')
        ///.click();
    ///});

    it("Find first button", () => {
        searchButton().should('be.visible');
    });

    it("Find element by specific attribute", () => {
        cy.get('[data-test-id="test-example"]').should('have.class','example');
    });

    it("Find list of fruits and choose specific element from this list", () => {
        cy.get('.query-list');
        cy.get('.query-list').contains('bananas').should('have.class','third');
        cy.get('.query-list').should('have.class','query-list');
    });

    it("Testing within function", () => {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr','placeholder','Email');
        });
    });

    it("Find the root element", () => {
        cy.root().should('match', 'html');

        ///cy.get('.query-ul').within(() => {
           /// cy.root().should('have.class','query-ul').within(() => {
              ///  cy.get('.query-ul > :nth-child(1)');
            ///});
        ///});
    });

    it("Find element on the second list", () => {
        cy.get('.query-ul').children('li').contains('One');
    });

    it("Best practices", () => {
        cy.get('[data-cy=submit').click();
    });

});