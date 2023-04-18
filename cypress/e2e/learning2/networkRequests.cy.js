/// <reference types="cypress" />

describe("Test Network Requests commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Network Requests title", () => {
        cy.get('.home-list > li')
        .eq(12)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test request", () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    });

    it("Test intercept", () => {
        let message = 'whoa, this comment does not exist'
        cy.intercept('GET', '**/comments/*').as('getComment')
        cy.get('.network-btn').click();
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
        cy.intercept('POST', '**/comments').as('postComment');
        cy.get('.network-post').click();
        cy.wait('@postComment').should(({request, response}) => {
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')
            expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()');
        })
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
        }, {
            statusCode: 404,
            body: {error: message},
            headers: {'access-control-allow-origin': '*'},
            delayMs: 500,
        }).as('putComment');
        cy.get('.network-put').click();
        cy.wait('@putComment');
        cy.get('.network-put-comment').should('contain', 'message');

    });

});