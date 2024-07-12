/// <reference types="Cypress" />
/// <reference types="jquery" />

describe('Currency Converter', () => {
    beforeEach(() => {  
      cy.visit('http://127.0.0.1:8080/src/');
    });
  
    it('displays exchange rates when the convert button is clicked', () => {
           cy.intercept('GET', 'https://v6.exchangerate-api.com/v6/7915c2bad639d7babe825060/latest/USD', {
        statusCode: 200,
        body: {
          "time_last_update_utc": "2023-07-11 12:00:00 UTC",
          "base_code": "USD",
          "conversion_rates": {
            "EUR": 0.85,
            "GBP": 0.75,
            "JPY": 110.53
          }
        }
      }).as('getRates');
  
            cy.get('#convertir').click();
  
            cy.wait('@getRates');
  
          cy.get('h1').should('contain', 'Cambios del dia 2023-07-11 12:00:00 UTC en base USD');
      cy.get('#lista').should('contain', 'EUR: 0.85');
      cy.get('#lista').should('contain', 'GBP: 0.75');
      cy.get('#lista').should('contain', 'JPY: 110.53');
    });
  
    it('displays an error message when the API request fails', () => {

            cy.intercept('GET', 'https://v6.exchangerate-api.com/v6/7915c2bad639d7babe825060/latest/USD', {
        statusCode: 500,
        body: {}
      }).as('getRatesFail');
  
     
      cy.get('#convertir').click();
  
      
      cy.wait('@getRatesFail');
  
      
      cy.get('h1').should('contain', 'Error al cargar los datos');
    });
  });
  