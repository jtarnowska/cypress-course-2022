function searchButton() {
    const buttonButton = '[id="query-btn"]';
    return cy.get(buttonButton)
};

export {searchButton};