/// <reference types="cypress"/>

describe("Test connectors commands", () => {

    it("Visit page", () => {
        cy.visit('https://example.cypress.io/');
    });

    it("Click on Connectors title", () => {
        cy.get('.home-list > li')
        .eq(9)
        .find('a')
        .eq(0)
        .click();
    });

    it("Test each", () => {
        cy.get('.connectors-each-ul > li')
        .each(function($el, index, $list){
            console.log($el, index, $list);
        });
    });

    it("Test its", () => {
        cy.get('.connectors-its-ul > li')
        .its('length')
        .should('be.gt', 2);
    });

    it("Test invoke", () => {
        cy.get('.connectors-div')
        .should('be.hidden')
        .invoke('show')
        .should('be.visible');
    });

    it("Test spread", () => {
        const arr = ['korek', 'daisy', 'szana']

        cy.wrap(arr).spread(function(kor, dai, sza){
            expect(kor).to.eq('korek')
            expect(dai).to.eq('daisy')
            expect(sza).to.eq('szana')
        });
    });

    it("Test then", () => {
        cy.get('.connectors-list > li')
        .then(function($lis){
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })

        cy.wrap(1)
        .then((num) => {
            expect(num).to.eq(1)
            return 2
        })
        .then((num) => {
            expect(num).to.eq(2)
        })

        cy.wrap(1)
        .then((numm) => {
            expect(numm).to.eq(1)
            cy.wrap(2)
        })
        .then((numm) => {
            expect(numm).to.eq(2)
        })

    });


});