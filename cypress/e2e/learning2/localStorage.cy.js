/// <reference types="cypress" />

describe("Test LocaleStorage commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Locale Storage title", () => {
        cy.get('.home-list > li')
        .eq(14)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test clearLocaleStorage", () => {
        cy.get('.ls-btn')
        .click()
        .should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        });
        cy.clearLocalStorage()
        .should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.be.null
        });

        cy.get('.ls-btn')
        .click()
        .should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        });
        cy.clearLocalStorage('prop1')
        .should((ls2) => {
            expect(ls2.getItem('prop1')).to.be.null
            expect(ls2.getItem('prop2')).to.eq('blue')
            expect(ls2.getItem('prop3')).to.eq('magenta')
        });

        cy.get('.ls-btn')
        .click()
        .should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        });
        cy.clearLocalStorage(/prop1|2/)
        .should((ls3) => {
            expect(ls3.getItem('prop1')).to.be.null
            expect(ls3.getItem('prop2')).to.be.null
            expect(ls3.getItem('prop3')).to.eq('magenta')
        })
    });


});