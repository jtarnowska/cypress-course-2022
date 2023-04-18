/// <reference types="cypress" />

describe("Test Files commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Files title", () => {
        cy.get('.home-list > li')
        .eq(13)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test fixtures", () => {
        cy.intercept('GET', '**/comments/*', {fixture: 'example.json'})
        .as('getComment');
        cy.get('.fixture-btn')
        .click();
        cy.wait('@getComment')
        .its('response.body')
        .should('have.property', 'name')
        .and('include', 'Using fixtures to represent data');
    });

    it("Test readFile", () => {
        cy.readFile('cypress.config.js').then((json) => {
            console.log(typeof json)
            console.log('dupa')
            expect(json).to.be.an('string')
          })
    });

    it("Test writeFile", () => {
        cy.request('https://jsonplaceholder.cypress.io/users')
        .then((response) => {
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })
        cy.fixture('users')
        .should((users) => {
            expect(users[0].name).to.exist
        });
    });

    it("Test writeFile_2", () => {
        cy.writeFile('cypress/fixtures/profile.json', {
            id: 8739,
            name: 'Jane',
            email: 'jane@example.com'
        });
        cy.fixture('profile')
        .should((profile) => {
            expect(profile.name).to.eq('Jane')
        });
    });



});