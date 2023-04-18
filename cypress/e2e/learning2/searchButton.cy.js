Cypress.Commands.add('searchButton', () => {
    
        const buttonButton = '[id="query-btn"]';
        cy.get(buttonButton)
        .should('contain','Button')
        .click();
    
});

