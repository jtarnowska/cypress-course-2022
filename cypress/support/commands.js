// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (nick, password) => {
    ///show menu under the little man icon to show log in button
    cy.get('.global-navigation > .global-navigation__bottom > .wds-dropdown > .wds-dropdown__content').should('be.hidden')
    .invoke('show').should('be.visible');
    ///click on Sign in button
    cy.get('#global-navigation-sign-in-link').click();
    ///accept cookies
    cy.get('body').then($body => {
        if($body.find('.NN0_TB_DIsNmMHgJWgT7U').length) {
            cy.get('.NN0_TB_DIsNmMHgJWgT7U').should('be.visible').click();
        }
    });
    ///write login and password
    cy.get('#password_identifier').click().type(nick);
    cy.get('#password').click().type(password);
    cy.get('.Submit_buttonWrapper__33HZ0').click();
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })