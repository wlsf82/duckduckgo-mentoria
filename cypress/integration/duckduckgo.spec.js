describe('Duck Duck Go', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/?q=Cypress.io**').as('getResults')
    cy.visit('https://duckduckgo.com')
  })
  it('searches for "Cypress.io"', () => {
    cy.get('#search_form_input_homepage').type('Cypress.io')
    cy.get('#search_button_homepage').click()
    cy.wait('@getResults')

    cy.get('.results .result').should('have.length', 11)
    cy.get('.results .result').last().should('contain', 'More results')
  })

  it('searches for "Cypress.io"', () => {
    cy.get('#search_form_input_homepage').type('Cypress.io{enter}')
    cy.wait('@getResults')

    cy.get('.results .result').should('have.length', 11)
    cy.get('.results .result').last().should('contain', 'More results')
  })
})
