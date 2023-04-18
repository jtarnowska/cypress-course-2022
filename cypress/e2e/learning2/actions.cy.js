/// <reference types="cypress" />

describe("TEST ACTIONS", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Actions", () => {
        cy.get('.col-xs-12 > .home-list > li').eq(2).find('a').eq(0).click();
    });

    // it("Test type", () => {
    //     cy.get('.action-email')
    //     .type('fake@email.com{leftarrow}{backspace}',{delay:50}).should('have.value','fake@email.cm');

    //     cy.get('.action-disabled')
    //     .type('force type action',{force: true});
    // });

    // it("Test focus", () => {
    //     cy.get('.action-focus')
    //     .focus()
    //     .should('have.attr','placeholder','Password');
    // });

    // it("Test blur", () => {
    //     cy.get('.action-blur')
    //     .type('Blur something')
    //     .blur();
    // });

    // it("Test clear", () => {
    //     cy.get('.action-clear')
    //     .type('Something to be cleared',{delay:50})
    //     .should('have.value','Something to be cleared')
    //     .clear({delay:50})
    //     .should('have.value','');
    // });

    // it("Test submit", () => {
    //     cy.get('.action-form')
    //     .find('.form-control')
    //     .type('Kupon');
        
    //     cy.get('.action-form')
    //     .submit()
    //     .next()
    //     .should('contain','Your form has been submitted');
    // });

    // it("Test click", () => {
    //     cy.get('.action-btn')
    //     .click();

    //     cy.get('#action-canvas')
    //     .click()
    //     .click('top')
    //     .click('bottom')
    //     .click('right')
    //     .click('left')
    //     .click('topLeft')
    //     .click('topRight')
    //     .click('bottomLeft')
    //     .click('bottomRight')
    //     .click(80, 75)
    //     .click(170, 75)
    //     .click(80, 165)
    //     .click(100, 185)
    //     .click(125, 190)
    //     .click(150, 185)
    //     .click(170, 165);

    //     cy.get('.action-labels > .label')
    //     .click({multiple:true});

    //     cy.get('.opacity-cover')
    //     .click({force:true});
    // });

    // it("Test doubleclick", () => {
    //     cy.get('.action-div')
    //     .dblclick()
    //     .should('not.be.visible')
    //     .get('.action-input-hidden')
    //     .should('be.visible');
    // });

    // it("Test rightclick", () => {
    //     cy.get('.rightclick-action-div')
    //     .rightclick()
    //     .should('not.be.visible')
    //     .get('.rightclick-action-input-hidden')
    //     .should('be.visible');
    // });

    // it("Test check", () => {
    //     cy.get('.action-checkboxes [type="checkbox"]')
    //     .not('[disabled]')
    //     .check()
    //     .should('be.checked');

    //     cy.get('.action-multiple-checkboxes [type="checkbox"]')
    //     .check(['checkbox1', 'checkbox2'])
    //     .should('be.checked');

    //     cy.get('.action-checkboxes [disabled]')
    //     .check({force:true});

    //     cy.get('.action-radios [type="radio"]')
    //     .not('[disabled]')
    //     .check()
    //     .should('be.checked');

    //     cy.get('.action-radios [type="radio"]')
    //     .check('radio1')
    //     .should('be.checked');

    //     cy.get('.action-radios [type="radio"]')
    //     .check('radio3',{force:true})
    //     .should('be.checked'); 

    // });

    // it("Test uncheck", () => {
    //     cy.get('.action-check [type="checkbox"]')
    //     .not('[disabled]')
    //     .uncheck();

    //     cy.get('.action-check [type="checkbox"]')
    //     .check('checkbox1')
    //     .should('be.checked')
    //     .uncheck('checkbox1')
    //     .should('not.be.checked');

    // });

    it("Test select", () => {
        cy.get('.action-select')
        .should('have.value','--Select a fruit--');

        cy.get('.action-select-multiple')
        .select(['apples','oranges'])
        .invoke('val')
        .should('deep.equal',['fr-apples','fr-oranges']);

        cy.get('.action-select-multiple')
        .select(['apples','oranges'])
        .invoke('val')
        .should('include','fr-oranges');
    });

    it("Test scrollIntoView", () => {
        cy.get('#scroll-horizontal > div > button')
        ///cy.get('#scroll-horizontal button') ///to samo znajdzie co wyzej
        .should('not.be.visible');

        cy.get('#scroll-horizontal button')
        .scrollIntoView()
        .should('be.visible');

        cy.get('#scroll-both button')
        .should('not.be.visible')
        .scrollIntoView()
        .should('be.visible');
    });

    it("Test scrollTo", () => {
        ///cy.scrollTo('bottom');

        cy.get('#scrollable-horizontal')
        .scrollTo('right')
        .scrollTo('left')
        .scrollTo(250, 250)
        .scrollTo('75%', '25%')
        .scrollTo('center', {easing: 'linear'})
        .scrollTo('center',{duration:200});
    });

    it("Test trigger", () => {
        cy.get('.trigger-input-range')
        .invoke('val', 25)
        .trigger('change')
        .get('input[type="range"]')
        .siblings('p')
        .should('have.text','25');
    });



});